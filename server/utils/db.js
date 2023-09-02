const { json } = require('express')
const { MongoClient, ObjectId } = require('mongodb')

const dbName = 'mydb' // 数据库名称

let _db = null

async function connect() {
  if (!_db) {
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017')
    _db = client.db(dbName)
  }
  return _db
}

async function get(collection, options = {}) {
  const db = await connect()
  if (options._id) {
    return await db.collection(collection).findOne({_id: new ObjectId(options._id)})
  }
  const sort = options.sort
  delete options.sort
  const project = options.project
  delete options.project
  const page = options.page
  delete options.page

  let query = db.collection(collection).find(options)
  if(sort) query = query.sort(sort)
  if(project) query = query.project(project)
  if(page) query = query.skip(page.index * page.size).limit(page.size)

  const data = await query.toArray()
  if (page) {
    const total = await db.collection(collection).countDocuments(options)
    return {data, page: {...page, total}}
  } else {
    return data
  }
}

async function add(collection, data) {
  const db = await connect()
  if (Array.isArray(data)){
    return await db.collection(collection).insertMany(data)
  } else {
     return await db.collection(collection).insertOne(data)
  }
}

async function update(collection, data) {
  const db = await connect()
  data = JSON.parse(JSON.stringify(data))
  const _id = data._id
  delete data._id
  return await db.collection(collection).findOneAndUpdate(
    { _id: new ObjectId(_id) },
    { $set: data },
    { returnDocument: 'after' }
  )
}

async function del(collection, data) {
  const db = await connect()
  return await db.collection(collection).deleteOne(
    { _id: new ObjectId(data._id) }
  )
}

module.exports = {
    get,
    add,
    update,
    del
}
