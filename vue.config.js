const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/https://lukas-with-a-k.github.io/Projet-WebWares//'
    : '/'
}
