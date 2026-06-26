FROM node:22-alpine

WORKDIR /app

RUN chown -R node:node /app

USER node

COPY --chown=node:node package.json package-lock.json ./

RUN npm install --no-audit --no-fund

COPY --chown=node:node . .

EXPOSE 5173 4173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
