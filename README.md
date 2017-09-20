# Greedy `ts-loader`

Get started with

```sh
yarn && yarn dev
```

The compilation process will **fail**. `ts-loader` is reading files which are not part of the bundle.

The bundle entrypoint defined at `src/build/webpack.dev.client.config.js` is pointing at `src/client/client.js`.

The `client.js` modules imports `App`, and that's it. The dependency tree stops there (except for `node_modules`).

However, there are many errors are thrown about other files not part of this dependency tree. They may or may not be complete, or be missing `@types`, but they should nevertheless not cause ts-loader to throw errors b/c they are not part of the the dependency graph.
