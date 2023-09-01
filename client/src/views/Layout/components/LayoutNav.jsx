import React, { useState } from 'react';
import styles from '../../../styles/Layout/layoutNav.module.css'; 
import { Popconfirm } from 'antd';



function AppTopNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    // 处理退出登录的逻辑
    setIsLoggedIn(false);
  };

  return (
    <nav className={styles.app_topnav}>
      <div className={`${styles.container} container`}>
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                <span>
                  <i className={`${styles.iconfont} iconfont icon-user`}></i>周杰伦
                </span>
              </li>
              <li>
                <Popconfirm
                    title="确认退出吗?"
                    okText="确认"
                    cancelText="退出"
                    onConfirm={handleLogout}
                >
                    <span>退出登陆</span>
                </Popconfirm>
              </li>
              <li>
                <span>我的订单</span>
              </li>
              <li>
                <span>会员中心</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <span>请先登录</span>
              </li>
              <li>
                <span>帮助中心</span>
              </li>
              <li>
                <span>关于我们</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default AppTopNav;
