FROM node:18 as development

WORKDIR /usr/app
COPY . .
RUN npm install
RUN npx prisma generate