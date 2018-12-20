const fs = require('fs');
let sourceFile = 'src/locale/messages.xlf';
let roDestFile = 'src/locale/messages.ro.xlf';
let os = require('os');

let lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(sourceFile),
});

fs.unlinkSync(roDestFile);
let roWriteStream = fs.createWriteStream(roDestFile);

lineReader.on('line', (line) => {
  const buffer = Buffer.from(line);
  roWriteStream.write(buffer + os.EOL, 'utf8');
  if (buffer.includes('<source>')) {
    let targetString = buffer.toString();
    targetString = targetString.replace('<source>', '<target>');
    targetString = targetString.replace('</source>', '_ro</target>');
    roWriteStream.write(targetString + os.EOL, 'utf8');
  }
});
