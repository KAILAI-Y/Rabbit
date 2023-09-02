import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/Layout/layoutHeader.module.css'; 
import { Category } from '../../../api/category.js';

function LayoutHeader() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    Category.getList().then(data => {
      setCategoryList(data);
    }); 

  }, [])

  return (
    <header className={styles.app_header}>
      <div className={`${styles.container} container`}>
        <h1 className={styles.logo}>
          <Link to="/">小兔鲜</Link>
        </h1>
        <ul className={styles.app_header_nav}>
          {categoryList && categoryList.map((item) => (
            <li className={styles.home} key={item.id}>
              <Link to={`/categories/${item._id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.search}>
          <i className={`${styles.iconfont} iconfont icon-search`}></i>
          <input type="text" placeholder="搜一搜" />
        </div>
        {/* 头部购物车 */}
      </div>
    </header>
  );
}

export default LayoutHeader;
