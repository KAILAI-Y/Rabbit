const express = require('express')
const { ObjectId } = require('mongodb')

const DB = require('../utils/db.js')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const categories = await DB.get('categories')
    res.json(categories)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const _id = req.params.id
    const category = await DB.get('categories', {_id})
    res.json(category)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.post('/', async (req, res) => {
  const newProduct = req.body
  try {
    const result = await DB.add('categories', newProduct)
    res.status(201).json(result)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.put("/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const data = req.body
        const result = await DB.update('categories', {_id, ...data})
        res.json(result)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const result = await DB.del('categories', {_id})
        res.json(result)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' })
    }
})

module.exports = router 