import axios from "axios";

async function getCategoryList () {
    const res = await axios.get('http://localhost:3004/categories')
    return res && res.data
    
}

export const Category = {
    get: getCategoryList
}