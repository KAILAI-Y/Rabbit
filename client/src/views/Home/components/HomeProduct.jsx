import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomePanel from './HomePanel'; 
import GoodsItem from './GoodsItem';
import { Goods } from '../../../api/Home.js';
import styles from '../../../styles/Home/homeProduct.module.css'; 

function HomeProduct() {
  const [goodsProduct, setGoodsProduct] = useState([]);

  useEffect(() => {
    Goods.get().then(data => {
      setGoodsProduct(data);
    });
  }, []);

  return (
    <div className={styles.home_product}>
      {goodsProduct && goodsProduct.map(cate => (
        <HomePanel title={cate.name} key={cate.id}>
          <div className={styles.box}>
            <Link className={styles.cover} to="/">
              <img src={cate.picture} alt="" />
              <strong className={styles.label}>
                <span>{cate.name}馆</span>
                <span>{cate.saleInfo}</span>
              </strong>
            </Link>
            <ul className={styles.goods_list}>
              {cate.goods.map(goods => (
                <li key={goods.id}>
                  <GoodsItem goods={goods} />
                </li>
              ))}
            </ul>
          </div>
        </HomePanel>
      ))}
    </div>
  );
}

export default HomeProduct;