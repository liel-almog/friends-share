# # stage1 as builder
# FROM node:16-alpine as builder

# # copy the package.json to install dependencies
# COPY package.json package-lock.json ./

# # Install the dependencies and make the folder
# RUN npm install && mkdir /react-ui && mv ./node_modules ./react-ui

# WORKDIR /react-ui

# COPY . .

# # Build the project and copy the files
# RUN npm run build


# FROM nginx:alpine

# #!/bin/sh

# COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

# ## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

# # Copy from the stahg 1
# COPY --from=builder /react-ui/build /usr/share/nginx/html

# EXPOSE 3000 80

# ENTRYPOINT ["nginx", "-g", "daemon off;"]

# -----------------------------------------------------------------------------------------------------------------------------
# FROM node:16 AS base
# ENV NODE_ENV=production

# WORKDIR /app

# COPY package.json \
#      yarn.lock    \
#      .env    \
#      ./
# RUN yarn --frozen-lockfile --ignore-scripts --production \
#  && yarn cache clean

# ## Remove unnecessary files from `node_modules` directory
# RUN ( wget -q -O /dev/stdout https://gobinaries.com/tj/node-prune | sh ) \
#  && node-prune


# ## ======================================================> The build image stage
# FROM node:16 AS builder
# ENV NODE_ENV=development

# COPY . .

# ## This step could install only the missing dependencies (ie., development deps ones)
# ## but there's no way to do that with this NPM version
# RUN yarn --frozen-lockfile --ignore-scripts
# ## Compile the TypeScript source code
# RUN yarn build

# # production environment
# FROM nginx:stable-alpine AS prod
# ENV NODE_ENV=production
# RUN rm -rf /usr/share/nginx/html/*

# COPY --from=builder /app/build /usr/share/nginx/html

# COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# -----------------------------------------------------------------------------------------------------------------------------

FROM node:16-alpine as build
WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

# production environment
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY --from=build /app/.nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]