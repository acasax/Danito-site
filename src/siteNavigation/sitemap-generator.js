require('babel-register')({
  presets: ['es2015', 'react']
})

const router = require('./SiteRoutes.tsx').default
const Sitemap = require('react-router-sitemap').default;

(
  new Sitemap(router)
    .build('https://localhost:3000')
    .save('./public/sitemap.xml')
)
