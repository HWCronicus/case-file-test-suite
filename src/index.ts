import fs from 'fs'
import glob from 'glob'

glob.sync('./src/case-files/**/*.json', (err, files) => {
  if (err) {
    console.log(err)
  } else {
    let count = 0
    files.forEach(async function (file) {
      const fileArray = file
        .replace('./src/case-files/', '')
        .replace('.json', '')
        .split('/')

      const jsonFile = JSON.parse(await fs.readFileSync(file, 'utf8'))
      console.log(`File: ${fileArray[1]} - Dir: ${fileArray[0]}`)
      console.log(jsonFile.name)
      count++
    })
    console.log(`Total files: ${count}`)
  }
})
