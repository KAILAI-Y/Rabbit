const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017' // MongoDB 连接地址
const dbName = 'mydb' // 数据库名称

let _db = null

async function connect() {
  if (!_db) {
    const client = await MongoClient.connect('mongodb://localhost:27017')
    _db = client.db(dbName)
  }
  return _db
}

module.exports = {
    connect
}
