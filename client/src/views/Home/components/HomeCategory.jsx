import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/Home/homeCategory.module.css'; 
import { Category } from '../../../api/category.js';

function HomeCategory() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    Category.get().then(data => {
      setCategoryList(data);
    }); 
  }, [])

  return (
    <>
        <div className={styles.home_category}>
            <ul className={styles.menu}>
                {categoryList.map(item => (
                <li key={item.id}>
                    <Link to="/">{item.name}</Link>
                    {item.children.slice(0, 2).map(i => (
                    <Link key={i.id} to="/">{i.name}</Link>
                    ))}
                    <div className={styles.layer}>
                    <h4>
                        分类推荐 <small>根据您的购买或浏览记录推荐</small>
                    </h4>
                    <ul>
                        {item.goods.map(i => (
                        <li key={i.id}>
                            <Link to="/">
                            <img src={i.picture} alt="" />
                            <div className={styles.info}>
                                <p className={`${styles.name} ellipsis-2`}>{i.name}</p>
                                <p className={`${styles.desc} ellipsis`}>{i.desc}</p>
                                <p className={styles.price}>
                                <i>¥</i>
                                {i.price}
                                </p>
                            </div>
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    </>
  );
}

export default HomeCategory;