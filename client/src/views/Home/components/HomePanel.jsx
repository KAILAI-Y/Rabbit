import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/Home/homePanel.module.css'; 

function HomePanel({ title, subTitle, children }) {
  return (
    <div className={styles.home_panel}>
      <div className={`${styles.container} container`}>
        <div className={styles.head}>
          {/* 主标题和副标题 */}
          <h3>
            {title}
            <small>{subTitle}</small>
          </h3>
        </div>
        {/* 主体内容区域 */}
        {children}
      </div>
    </div>
  );
}

HomePanel.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node, // You need to define PropTypes for children
};

export default HomePanel;
