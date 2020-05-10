const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-tag-jsx": hot(preferDefault(require("C:\\Users\\HyPeN-BR\\Documents\\CODE\\codeBlog2\\src\\templates\\tag.jsx"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("C:\\Users\\HyPeN-BR\\Documents\\CODE\\codeBlog2\\src\\templates\\post.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\HyPeN-BR\\Documents\\CODE\\codeBlog2\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\HyPeN-BR\\Documents\\CODE\\codeBlog2\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\HyPeN-BR\\Documents\\CODE\\codeBlog2\\src\\pages\\index.js")))
}

