import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomePanel from './HomePanel'; 
import { Hot } from '../../../api/Home.js';
import styles from '../../../styles/Home/homeHot.module.css'; 

function HomeHot() {
  const [hotList, setHotList] = useState([]);

  useEffect(() => {
    Hot.get().then(data => {
      setHotList(data);
    }); 
  }, [])

  return (
    <HomePanel title="人气推荐" subTitle="人气爆款 不容错过">
      <ul className={styles.goods_list}>
        {hotList.map(item => (
          <li key={item.id}>
            <Link to="/">
              <img src={item.picture} alt="" />
              <p className={styles.name}>{item.title}</p>
              <p className={styles.desc}>{item.alt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </HomePanel>
  );
}

export default HomeHot;
