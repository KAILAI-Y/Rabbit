import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { Link, useParams } from 'react-router-dom';
import styles from '../../styles/Category/category.module.css';
import { Category } from '../../api/category.js';


function GetCategory() {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    Category.getData(id).then(data => {
      setCategoryData(data);
      console.log(id)
    }); 
  }, [id])


  return (
    <div className={styles.top_category}>
      <div className={`${styles.container} container`}>
        {/* 面包屑 */}
        <div className={styles.bread_container}>
          <Breadcrumb items={[{ title: <Link to="/">首页</Link> }, {title: categoryData.name}]} />
        </div>
      </div>
    </div>
  );
}

export default GetCategory;