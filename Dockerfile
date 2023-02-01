FROM circleci/android:api-23-node

RUN sudo mkdir -p /app
RUN sudo chmod -R 777 /app
WORKDIR /app
COPY ./template/ /app/
ENV NODE_ENV=production
RUN sudo npm i -g pnpm
RUN pnpm install

STOPSIGNAL SIGQUIT