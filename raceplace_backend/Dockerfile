FROM node:18-alpine

WORKDIR /src

COPY package*.json ./

# Установка глобально Nest CLI
RUN npm install -g @nestjs/cli

RUN npm install --production

COPY . .

RUN npx prisma generate

RUN npm run build

CMD ["node", "dist/src/main.js"]

EXPOSE 4000