const fs = require('fs') //require,内置函数，不需要去定义

fs.readFile('./a.md', 'utf-8', (err, text) => {
  if(err){
    console.log(err)
    return
  } 

  text = text.toUpperCase()
  fs.writeFile('./a-after.md', text, err => {
    if(err){
    console.log(err)
    return
    }
    console.log('输入完成')
  })
})