# Vue-lazy

> A vue.js boilerplate using vue-router with lazy-loaded components/views incl. code splitting with webpack and more.

![Vue-lazy screenshot](screenshot.png)

When building apps with a bundler, the JavaScript bundle can become quite large and thus affecting page load time. It would be more efficient if we can split each route's components into a separate chunk, and only load them when the route is visited. This boilerplate sets you up.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Where do I start?

Just look at the contents of the src/ directory starting with src/main.js.

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).