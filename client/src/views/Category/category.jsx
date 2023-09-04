import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { Carousel } from 'antd';
import { Link, useParams } from 'react-router-dom';
import styles from '../../styles/Category/category.module.css';
import { Category } from '../../api/category.js';
import { Banner } from '../../api/Home.js';


function GetCategory() {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState({});
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    Category.getData(id).then(data => {
      setCategoryData(data);
      console.log(id)
    }); 
    Banner.get('2').then(data => {
      setBannerList(data);
    }); 
  }, [id])


  return (
    <div className={styles.top_category}>
      <div className={`${styles.container} container`}>
        {/* 面包屑 */}
        <div className={styles.bread_container}>
          <Breadcrumb items={[{ title: <Link to="/">首页</Link> }, {title: categoryData.name}]} />
        </div>
        <div className={styles.home_banner}>
            <Carousel autoplay>
                {bannerList.map((item) => (
                <div key={item.id}>
                    <img src={item.imgUrl} alt="" className={styles.banner_content} />
                </div>
                ))}
            </Carousel>
        </div>
      </div>
    </div>
  );
}

export default GetCategory;