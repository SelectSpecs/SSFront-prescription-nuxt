FROM node:lts-alpine

ENV APP_ROOT /src/
RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}

#bug in npm https://github.com/npm/uid-number/issues/3
RUN npm config set unsafe-perm true

RUN npm install pm2 -g
ADD package.json package-lock.json ${APP_ROOT}
RUN npm install

ADD . ${APP_ROOT}
RUN npm run build

RUN sed -i "6irequire('newrelic');" ./node_modules/nuxt-start/bin/nuxt-start.js
ENV HOST 0.0.0.0

#ENTRYPOINT ["npm", "run"]
#CMD ["start"]

ENTRYPOINT ["pm2-runtime"]
CMD ["pm2.config.yml"]
