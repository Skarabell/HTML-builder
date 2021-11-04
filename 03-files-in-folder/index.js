const fs = require('fs')
const path = require('path')

const folderPath = path.join(__dirname, "secret-folder")

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.log(err)
    } else {
        files.forEach(file => {
            let currentFile = path.join(folderPath, file)

            fs.stat(currentFile, function (err, stats) {
                if (stats.isFile()) {
                    const ext = path.extname(currentFile)
                    const name = path.basename(currentFile, ext)
                    const size = stats["size"]

                    console.log(`${name} - ${ext.substring(1)} - ${size} byte`)

                }
            })
        })
    }


})