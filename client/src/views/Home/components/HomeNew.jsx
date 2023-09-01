import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomePanel from './HomePanel';
import { New } from '../../../api/Home.js';
import styles from '../../../styles/Home/homeNew.module.css'; 

function HomeNew() {
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    New.get().then(data => {
      setNewList(data);
    }); 
  }, [])

  return (
    <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
      <ul className={styles.goods_list}>
        {newList.map(item => (
          <li key={item.id}>
            <Link to="/">
              <img src={item.picture} alt="" />
              <p className={styles.name}>{item.name}</p>
              <p className={styles.price}>&yen;{item.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </HomePanel>
  );
}

export default HomeNew;
