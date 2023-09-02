const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiurl = "http://pcapi-xiaotuxian-front-devtest.itheima.net/home/category/head";
const imageDir = "images/categories/goods";

async function downloadImage(url, category, filename) {
  const response = await axios({
    method: 'get',
    url: url,
    responseType: 'stream',
  });

  const categoryDir = path.join(__dirname, imageDir, category);
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }

  const imagePath = path.join(categoryDir, filename);
  const writer = fs.createWriteStream(imagePath);

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

async function fetchDataAndDownloadImages() {
  try {
    const response = await axios.get(apiurl);
    const data = response.data.result;

    for (const category of data) {
      const categoryName = category.name;
      for (const goods of category.goods) {
        const url = goods.picture;
        const filename = path.basename(url);

        console.log(`Downloading ${filename}`);
        await downloadImage(url, categoryName, filename);
      }
    }

    console.log("Images downloaded successfully!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

fetchDataAndDownloadImages();
