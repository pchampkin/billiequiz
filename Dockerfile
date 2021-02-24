FROM node:10.13-alpine AS test
ENV NODE_ENV debug
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install 
# && mv node_modules ../
COPY . .
CMD npm run test

FROM test AS final
EXPOSE 80
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent 
CMD npm start
