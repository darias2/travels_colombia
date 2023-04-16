/** @type {import('next').NextConfig} */
const path=require("path")

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions:{
    includePaths:[path.join(__dirname, "app/scss")],
    prependData:"@import 'app.scss';"
  }
}

module.exports = nextConfig
