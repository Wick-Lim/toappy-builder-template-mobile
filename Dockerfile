FROM circleci/android:api-23-node
RUN mkdir -p /usr/src/app
COPY ./template/* /usr/src/app/
WORKDIR /usr/src/app
RUN npm install -g pnpm
RUN pnpm install

STOPSIGNAL SIGQUIT