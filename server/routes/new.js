const express = require('express')
const { ObjectId } = require('mongodb')

const DB = require('../utils/db.js')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const db = await DB.connect()
    const newgood = await db.collection('new').find({}).toArray()
    res.json(newgood)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const db = await DB.connect()
    const newgood = await db.collection('new').findOne({ 
     _id: new ObjectId(id)
    })
    res.json(newgood)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.post('/', async (req, res) => {
  const newProduct = req.body
  try {
    const db = await DB.connect()
    const result = await db.collection('new').insertOne(newProduct)
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
        const result = await db.collection('new').findOneAndUpdate(
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
        const result = await db.collection('new').deleteOne(
            { _id: new ObjectId(id) }
        )
        res.json(result)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' })
    }
})

module.exports = router 