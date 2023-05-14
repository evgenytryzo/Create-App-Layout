# Create Next-App Layout

## About

This program exposes the layout of the next application, using docker.

## Start

First, copy the repository:

```
git clone https://github.com/https://github.com/evgenytryzo/Create-App-Layout.git
```

After cloning, you should install dependencies. To do this, go to the command line and write the following commands:

```
yarn install
npm install
```

Next, you need to build a docker image to run docker-compose(The name can be changed, but it should also be changed in docker-compose.yml):

```
docker build -t next-app .
```

Open a browser window and navigate to a local host with port 4000:

```
http://localhost:4000/
```

## Tools:

- Next.js
- React
- Docker
- Yarn
- CSS

## Tasks for this project:

- Create a 'sh' file to automatically configure dependencies in the project.
- Change the 'export' and 'import' in the components for convenient work with them.
- Install 'Babel'.
