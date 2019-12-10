# vue-vant-template
Use vant's vue project template

```bash

# enter the project directory
cd vue-vant-template

# install dependency
npm install

# Use vant's vue recommends that you do not Use CNPM installation dependencies directly.You can solve the problem of slow download speed of NPM by doing the following: project template
npm install --registry=https://registry.npm.taobao.org

# develop
npm run dev
```

This will automatically open http://localhost:9999

## Build

```bash
# build for test environment
npm run build:stage

# build for production environment
npm run build:prod
```

## Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix
```