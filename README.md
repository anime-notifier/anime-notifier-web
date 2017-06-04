# AniTrack Web
This project is the web view for anitrack, build on React and generated using [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

Under the hood, the project uses redux and websocket to read and manipulate data. It also uses react-router that is programmed to follow the folder structure to make it easier to navigate.

There are some enviroment variables that are required to properly run the project. These variables can be seen on [.env.example](https://github.com/anitrack/anitrack-web/blob/master/.env.example).

The server required to provide data is hosted in a different repo that can be accessed [here](https://github.com/anitrack/anitrack).

## Setting up your own server
**TL;DR: Clone, install, setup .env, build, serve static file.**

It is very easy to deploy a production build thanks to create-react-app. However, this guide will assume that you are familiar with setting up a server and skip through a lot of details.

1. First, we need to clone the project
```
git clone https://github.com/anitrack/anitrack-web.git
```
Alternatively, scroll to the top of this page. Click a green button called `Clone or download`. Then, click on `Download ZIP`

2. Navigate to the folder
```
cd anitrack-web
```

3. Install dependencies
```
npm install
# or
yarn
```

4. Setup .env file
```
cp .env.example .env
```
*REACT_APP_BACKEND_SERVER is the location where [anitrack](https://github.com/anitrack/anitrack) is listening*

5. Build the project
```
npm run build
```
This will create a folder called `build` which should be served as static file. This guide will use Nginx for that but you can use anything you like

6. Assuming you are running ubuntu, the following are configs that can be copied to nginx config file
```
nano /etc/nginx/sites-enabled/default
```
```
server{
  listen 80;
  server_name #DOMAIN#;

  root #PROJECT_PATH#/build;
  index index.html;
  try_files $uri $uri/ /index.html;
}
```
There are a few things that can be added to the config such as SSL, gzip, and extended cookie expiry. However, those are not within the scope of this guide.

If there's an issue while setting up the project, please file in a [report](https://github.com/anitrack/anitrack-web/issues/new).
