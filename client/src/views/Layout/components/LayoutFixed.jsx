import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../../api/category.js';
import styles from '../../../styles/Layout/layoutFixed.module.css';

function LayoutFixed() {
  const [categoryList, setCategoryList] = useState([]);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    Category.get().then(data => {
      setCategoryList(data);
    });

    const handleScroll = () => {
      if (window.scrollY > 78) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.app_header_sticky} ${isSticky ? styles.show : ''}`}>
      <div className={`${styles.container} container`}>
        <h1 className={styles.logo}>
          <Link className={styles.hide_text} to="/">小兔鲜</Link>
        </h1>
        <ul className={styles.app_header_nav}>
          {categoryList && categoryList.map((item) => (
            <li className={styles.home} key={item.id}>
              <Link to="/">{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.right}>
            <Link to="/">品牌</Link>
            <Link to="/">专题</Link>
        </div>
        {/* 头部购物车 */}
      </div>
    </header>
  );
}

export default LayoutFixed;