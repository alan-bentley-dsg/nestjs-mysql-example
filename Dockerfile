FROM node

WORKDIR /workspace
COPY package.json yarn.lock /workspace/
RUN yarn

COPY . .

CMD ["yarn", "start"]
EXPOSE 4000