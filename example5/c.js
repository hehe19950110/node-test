//exports = module.exports

function sum() {
  return [...arguments].reduce((v1, v2) => v1 + v2)
 }
 
 module.exports = sum

 //exports = sum      错误，不能直接对exports赋值
 //exports.sum = sum     ok
