import axios from "axios";

async function getCategoryList () {
    const res = await axios.get('http://127.0.0.1:3004/categories')
    return res && res.data
    
}

async function getCategoryData(id) {
    const res = await axios.get(`http://127.0.0.1:3004/categories/${id}`);
    return res.data;
  
}

export const Category = {
    getList: getCategoryList,
    getData: getCategoryData
}

