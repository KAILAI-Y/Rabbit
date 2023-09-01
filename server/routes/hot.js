const express = require('express')
const { ObjectId } = require('mongodb')

const DB = require('../db.js')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const db = await DB.connect()
    const hot = await db.collection('hot').find({}).toArray()
    res.json(hot)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const db = await DB.connect()
    const hot = await db.collection('hot').findOne({ 
     _id: new ObjectId(id)
    })
    res.json(hot)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.post('/', async (req, res) => {
  const newProduct = req.body
  try {
    const db = await DB.connect()
    const result = await db.collection('hot').insertOne(newProduct)
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
        const result = await db.collection('hot').findOneAndUpdate(
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
        const result = await db.collection('hot').deleteOne(
            { _id: new ObjectId(id) }
        )
        res.json(result)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' })
    }
})

module.exports = router 