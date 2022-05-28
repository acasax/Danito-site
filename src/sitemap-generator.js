require('babel-register')({
  presets: ['es2015', 'react']
})

const router = require('./siteNavigation/SiteRoutes').default
const Sitemap = require('react-router-sitemap').default

function generateSitemap () {
  return (
    new Sitemap(router)
      .build('https://react.danito.rs')
      .save('./public/sitemap.xml')
  )
}

generateSitemap()
