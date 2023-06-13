FROM node:alpine

COPY package.json ./

# the below command is what happens when you build the image
RUN npm install

# the below command is what happens when you run the container
CMD ["node","server.js"]