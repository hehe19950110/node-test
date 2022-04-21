const MarkdownIt = require('markdown-it') //markdowm-it,不在本地，查找不到，需要下载到本地，变成内置模块（npm install markdown-it）
const fs = require('fs')

let md = new MarkdownIt()

fs.readFile('./a.md','utf-8',(err,text) => {
  if(err) throw err
  let html = md.render(text)

  fs.writeFile('./a.html',html,err => {
    if(err) throw err
    console.log('转换完成')
  })
})
