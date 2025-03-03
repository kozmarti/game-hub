FROM node:18-alpine AS base

RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
USER app

WORKDIR /app

COPY --chown=app:app package*.json ./
RUN npm install
COPY --chown=app:app . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host"]