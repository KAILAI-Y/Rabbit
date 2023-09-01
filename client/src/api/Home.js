import axios from "axios";

async function getCategoryList () {
    const cate_res = await axios.get('http://localhost:3004/categories')
    return cate_res && cate_res.data
    
}

export const Category = {
    get: getCategoryList
}

async function getBannerList () {
    const banner_res = await axios.get('http://localhost:3004/banner')
    return banner_res && banner_res.data
}

export const Banner = {
    get: getBannerList
}


async function getNewList () {
    const new_res = await axios.get('http://localhost:3004/new')
    return new_res && new_res.data
}

export const New = {
    get: getNewList
}

async function getHotList () {
    const hot_res = await axios.get('http://localhost:3004/hot')
    return hot_res && hot_res.data
}

export const Hot = {
    get: getHotList
}


async function getGoodsList () {
    const goods_res = await axios.get('http://localhost:3004/goods')
    return goods_res && goods_res.data
}

export const Goods = {
    get: getGoodsList
}

