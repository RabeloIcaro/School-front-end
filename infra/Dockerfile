FROM node:20-buster 

COPY ./ /tmp

WORKDIR /tmp

RUN npm i


RUN npm run build

CMD [ "npm", "start" ]

