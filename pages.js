// scriptLoading	{'blocking'|'defer'}
const pagesList = {
  index: {
    chunk: "./src/dashboard/index.tsx",
    js: [], // to add additional external resources js to load like jquery
    css: [], // to add additional external resources css
    title: "App",
    favicon: "",
    meta: {
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      "theme-color": "#a1fa11",
    },
    scriptLoading: "blocking",
  },
};
module.exports.pages = { ...pagesList };
