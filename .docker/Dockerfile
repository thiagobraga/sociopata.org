## ==========================
## Build stage
## ==========================
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY public ./public
COPY src ./src

RUN yarn build

## ==========================
## Runtime stage
## ==========================
FROM nginx:1.27-alpine AS runtime

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
