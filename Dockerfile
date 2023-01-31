FROM circleci/android:api-23-node

RUN mkdir -p /usr/src/app
COPY ./template/* /usr/src/app/
WORKDIR /usr/src/app
RUN npm install -g pnpm
RUN pnpm install

# 파리미터로 받은 프로젝트 데이터를 js로 변환하는 스크립트 실행

# android build
RUN pnpm copy
RUN pnpm sync
# android keystore에 대한 확인이 필요함
# keystore 정보는 프로젝트 데이터에 포함되어 있다고 생각하고, cap build android 커맨드의 파라미터가 추가되야함.
RUN pnpm make

STOPSIGNAL SIGQUIT