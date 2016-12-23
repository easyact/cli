FROM node:6
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
EXPOSE 4300
RUN npm install -g angular-cli
COPY . /usr/src/app
#RUN ng build -w --output-path=dist/client
CMD [ "npm", "start" ]
