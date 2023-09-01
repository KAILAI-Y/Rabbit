const express = require('express')
const { ObjectId } = require('mongodb')

const DB = require('../utils/db.js')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const db = await DB.connect()
    const goods = await db.collection('goods').find({}).toArray()
    res.json(goods)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const db = await DB.connect()
    const goods = await db.collection('goods').findOne({ 
     _id: new ObjectId(id)
    })
    res.json(goods)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.post('/', async (req, res) => {
  const newProduct = req.body
  try {
    const db = await DB.connect()
    const result = await db.collection('goods').insertOne(newProduct)
    res.json(result)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const db = await DB.connect()
        const result = await db.collection('goods').findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: data },
            { returnDocument: 'after' }
        )
        res.json(result)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const db = await DB.connect()
        const result = await db.collection('goods').deleteOne(
            { _id: new ObjectId(id) }
        )
        res.json(result)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' })
    }
})

module.exports = router 