export type ClassValue = string | number | null | false | undefined | ClassValue[]

export function cn(...values: ClassValue[]): string {
  const result: string[] = []

  for (const value of values) {
    if (value === null || value === undefined || value === false || value === '') {
      continue
    }

    if (Array.isArray(value)) {
      const inner = cn(...value)
      if (inner) {
        result.push(inner)
      }
      continue
    }

    result.push(String(value))
  }

  return result.join(' ')
}
