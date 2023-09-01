const axios = require('axios')

const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
});

// 构建本地图片链接的函数
function buildLocalImageUrl(remoteImageUrl) {
    const imageName = remoteImageUrl.split('/').pop();
    return `http://127.0.0.1:3004/images/${imageName}`;
}

async function getCategories() {
    const res = await instance.get('/home/category/head')
    // console.log(res.data.result)
    // const categoryList = res.data.result
    // for(let category of categoryList) {
    //     // 转换图片链接
    //     if (category.picture) {
    //         category.picture = buildLocalImageUrl(category.picture);
    //     }
    //     // const data = await instance.post('http://127.0.0.1:3004/categories', category)
    //     // console.log(data)
    // }
}

async function changeGoodsUrl() {
    const res = await instance.get('/home/category/head')
    const categoryList = res.data.result
    for(let category of categoryList) {
        // 转换图片链接
        if (category.picture) {
            category.picture = buildLocalImageUrl(category.picture);
        }
        
        // 转换 category 内的 goods 中的图片链接
        if (category.goods) {
            for (let goods of category.goods) {
                if (goods.picture) {
                    goods.picture = buildLocalImageUrl(goods.picture);
                }
            }
        }

        const data = await instance.post('http://127.0.0.1:3004/categories', category)
    }
}


async function getBanner() {
    const res = await instance.get('/home/banner')
    // console.log(res.data.result)
    const bannerList = res.data.result
    for(let banner of bannerList) {
        if (banner.imgUrl) {
            banner.imgUrl = buildLocalImageUrl(banner.imgUrl);
        }
        const data = await instance.post('http://127.0.0.1:3004/banner', banner)
        // console.log(data)
    }
} 

async function getNews() {
    const res = await instance.get('/home/new')
    // console.log(res.data.result)
    const newsList = res.data.result
    for(let one_new of newsList) {
        if (one_new.picture) {
            one_new.picture = buildLocalImageUrl(one_new.picture);
        }
        const data = await instance.post('http://127.0.0.1:3004/new', one_new )
        // console.log(data)
    }
} 

async function getHot() {
    const res = await instance.get('/home/hot')
    // console.log(res.data.result)
    const hotList = res.data.result
    for(let hot of hotList) {
        if (hot.picture) {
            hot.picture = buildLocalImageUrl(hot.picture);
        }
        const data = await instance.post('http://127.0.0.1:3004/hot', hot)
        // console.log(data)
    }
} 

async function getGoods() {
    const res = await instance.get('/home/goods')
    // console.log(res.data.result)
    const goodsList = res.data.result
    for(let goods of goodsList) {
        if (goods.picture) {
            goods.picture = buildLocalImageUrl(goods.picture);
        }
        const data = await instance.post('http://127.0.0.1:3004/goods', goods)
        // console.log(data)
    }
} 

getCategories()
changeGoodsUrl()
getBanner()
getNews()
getHot()
getGoods()