FROM node:alpine

WORKDIR '/app'

# Rebuild the image when any change in the json file
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]