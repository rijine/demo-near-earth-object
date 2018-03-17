FROM node:boron
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "build"]
CMD ["npm", "run", "serve"]