const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3004

// 设置静态文件目录，将其映射到路由 /public
app.use(express.static('public'))

// 使用 cors 中间件
app.use(cors());

app.use(bodyParser.json())

const categoriesRouter = require('./routes/categories')
app.use('/categories', categoriesRouter)

const bannerRouter = require('./routes/banner')
app.use('/banner', bannerRouter)

const hotRouter = require('./routes/hot')
app.use('/hot', hotRouter)

const newRouter = require('./routes/new')
app.use('/new', newRouter)

const goodsRouter = require('./routes/goods')
app.use('/goods', goodsRouter)

app.listen(port, () => {
    console.log(`API Server is listening at http://127.0.0.1:${port}`)
})