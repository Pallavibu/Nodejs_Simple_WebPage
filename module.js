
fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'utf-8', (err, data) => {
    if(err) {
        throw err
    }
  

    console.log(data)
})