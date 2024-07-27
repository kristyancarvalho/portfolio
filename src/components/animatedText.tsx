import { motion, useMotionValue, useTransform, animate } from "framer-motion";

/**
 * Importing necessary hooks from React.
 *
 * `useEffect` is a hook that lets you perform side effects in your function components.
 * `useState` is a hook that lets you add state to your functional components.
 */
import { useEffect, useState } from "react";

// Type definition for the props expected by the AnimatedText component.
type AnimatedTextProps = {
  text: string; // The text to be animated.
};

/**
 * AnimatedText is a component that gradually reveals text from start to end, one character at a time.
 *
 * @param {string} text - The text to be animated.
 */
export default function AnimatedText({ text }: AnimatedTextProps) {
  // `count` is a motion value that starts at 0 and will animate up to the length of the text.
  const count = useMotionValue(0);

  // `rounded` is a transformed motion value of `count`, rounding it to the nearest whole number.
  const rounded = useTransform(count, (latest) => Math.round(latest));

  // `displayText` is a transformed motion value of `rounded`, slicing the text to the current count.
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  // `animationCompleted` is a state variable to keep track of whether the animation has completed.
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    /**
     * Initiating the animation of the `count` motion value from 0 to the length of the text.
     * The animation is linear over a 10 second duration.
     * An `onUpdate` callback is specified to check if the animation is complete, and if so, `setAnimationCompleted` is called with `true`.
     */
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 10,
      ease: "linear",
      onUpdate: (latest) => {
        if (latest === text.length) {
          setAnimationCompleted(true);
        }
      },
    });

    // Returning a cleanup function to stop the animation when the component is unmounted.
    return controls.stop;
  }, [count, text.length]); // Empty dependency array means this useEffect will only run once, similar to `componentDidMount`.

  return (
    /**
     * Rendering a paragraph element with a class of `animation-completed` if the animation is complete,
     * otherwise, it renders with an empty class string.
     * Inside the paragraph, a `motion.span` element is rendered with the `displayText` motion value.
     */
    <p className={animationCompleted ? "animation-completed" : ""}>
      <motion.span>{displayText.get()}</motion.span>
    </p>
  );
}