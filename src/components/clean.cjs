const fs = require('fs');
const path = require('path');

function cleanZoneIdentifier(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    files.forEach(file => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stat) => {
        if (err) {
          return console.log('Error getting file stats: ' + err);
        }

        if (stat.isDirectory()) {
          cleanZoneIdentifier(filePath); // Recursive call for subdirectories
        } else if (file.endsWith('Zone.Identifier')) {
          fs.unlink(filePath, err => {
            if (err) {
              console.log(`Error deleting file ${filePath}: ${err}`);
            } else {
              console.log(`Deleted file: ${filePath}`);
            }
          });
        }
      });
    });
  });
}

const directoryToClean = './ui'; // Current directory, you can change this to the desired directory
cleanZoneIdentifier(directoryToClean);