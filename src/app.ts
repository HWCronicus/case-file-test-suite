const glob = require('glob')
const fs = require('fs')

const readFiles = function (pat, forFile) {
  // pattern
  pat = '*.json'
  // for file method
  forFile = (contentOfFile, jsonFileInDirectory) => {
    console.log(' ')
    console.log(jsonFileInDirectory)
    console.log(' ')
    console.log(contentOfFile)
    console.log(' ')
  }
  // using glob
  glob(pat, function (err, files) {
    if (err) {
      console.log(err)
    } else {
      files.forEach(function (file) {
        fs.readFile(file, function (err, data) {
          if (err) {
            console.log(err)
          } else {
            forFile(data.toString(), file)
          }
        })
      })
    }
  })
}
readFiles()
