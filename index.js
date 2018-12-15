const fs = require('fs-extra')
const path = require('path')

function getTemplate (path) {
  const result = '<!DOCTYPE html>' +
    '<html>' +
    '<head>' +
      '<meta charset="utf-8">' +
      '<title>Redirecting...</title>' +
      '<link rel="canonical" href="' + path + '">' +
      '<meta http-equiv="refresh" content="0; url=' + path + '">' +
    '</head>' +
    '</html>'

  return result
}

module.exports = (options, ctx) => ({
  async generated (pagePaths) {
    const { pages, outDir } = ctx

    pages.filter(({ frontmatter }) => {
      return frontmatter.alias || frontmatter.aliases
    }).forEach(page => {
      let aliases = page.frontmatter.alias || page.frontmatter.aliases
      if (!Array.isArray(aliases)) aliases = [aliases]
      if (!aliases.length) return

      const content = getTemplate(page.path)

      aliases.forEach(async alias => {
        const aliasPagePath = path.resolve(outDir, alias)
        await fs.outputFile(aliasPagePath, content)
      })
    })
  }
})
