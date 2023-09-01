import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import styles from '../../../styles/Home/goodItems.module.css'; 

function GoodsItem({ goods }) {
  return (
    <Link to="/" className={styles.goods_item}>
      <img src={goods.picture} alt="" />
      <p className={`${styles.name} ellipsis`}>{goods.name}</p>
      <p className={`${styles.desc} ellipsis`}>{goods.desc}</p>
      <p className={styles.price}>&yen;{goods.price}</p>
    </Link>
  );
}

GoodsItem.propTypes = {
  goods: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.string,
  }),
};

export default GoodsItem;
