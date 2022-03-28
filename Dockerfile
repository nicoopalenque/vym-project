FROM node:12.11.1

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm intall

COPY . /app

EXPOSE 4200

CMD ["ng", "serve", "-o"]
