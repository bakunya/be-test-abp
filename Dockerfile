FROM node:18-alpine
COPY . /src
RUN cd /src && npm install && npm run build
EXPOSE 3030
CMD ["node", "/src/dist/index.js"]
