const fs = require('fs')
let data = fs.readFileSync('./index.html')
data = data.toString()
let start = data.search('<script type="text/babel">') + 26;
let stop = data.search('</script>\n</body>')
fs.writeFile('index.js', data.substr(start, stop - start), () => { })