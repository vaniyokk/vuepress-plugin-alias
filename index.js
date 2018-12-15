module.exports = (options, ctx) => ({
  async generated (pagePaths) {
    console.log(options)
    console.log(pagePaths)
  }
})
