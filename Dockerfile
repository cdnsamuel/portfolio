# Dockerfile frontend
# build environment
FROM node:20.10 as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY ./ /usr/src/app

RUN npm install -g @pnpm/exe
RUN pnpm install
RUN pnpm run build

# production environment
FROM nginx:1.24
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]