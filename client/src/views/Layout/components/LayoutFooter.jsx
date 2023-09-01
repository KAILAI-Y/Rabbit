import React from 'react';
import styles from '../../../styles/Layout/layoutFooter.module.css'; 

function LayoutFooter() {
  return (
    <footer className={styles.app_footer}>
        {/* <!-- 联系我们 --> */}
        <div className={styles.contact}>
            <div className={`${styles.container} container`}>
                <dl>
                    <dt>客户服务</dt>
                    <dd><i className={`${styles.iconfont} iconfont icon-kefu`}></i> 在线客服</dd>
                    <dd><i className={`${styles.iconfont} iconfont icon-question`}></i> 问题反馈</dd>
                </dl>
                <dl>
                    <dt>关注我们</dt>
                    <dd><i className={`${styles.iconfont} iconfont icon-weixin`}></i> 公众号</dd>
                    <dd><i className={`${styles.iconfont} iconfont icon-weibo`}></i> 微博</dd>
                </dl>
                <dl>
                    <dt>下载APP</dt>
                    <dd className={styles.qrcode}><img src="/assets/images/qrcode.jpg" alt="qrcode"/></dd>
                    <dd className={styles.download}>
                        <span>扫描二维码</span>
                        <span>立马下载APP</span>
                        <a href="foo">下载页面</a>
                    </dd>
                </dl>
                <dl>
                    <dt>服务热线</dt>
                    <dd className={styles.hotline}>400-0000-000 <small>周一至周日 8:00-18:00</small></dd>
                </dl>
            </div>
        </div>
        {/* <!-- 其它 --> */}
        <div className={styles.extra}>
            <div className={`${styles.container} container`}>
                <div className={styles.slogan}>
                    <a href="foo">
                        <i className="iconfont icon-footer01"></i>
                        <span>价格亲民</span>
                    </a>
                    <a href="foo">
                        <i className="iconfont icon-footer02"></i>
                        <span>物流快捷</span>
                    </a>
                    <a href="foo">
                        <i className="iconfont icon-footer03"></i>
                        <span>品质新鲜</span>
                    </a>
                </div>
                {/* <!-- 版权信息 --> */}
                <div className={styles.copyright}>
                    <p>
                        <a href="foo">关于我们</a>
                        <a href="foo">帮助中心</a>
                        <a href="foo">售后服务</a>
                        <a href="foo">配送与验收</a>
                        <a href="foo">商务合作</a>
                        <a href="foo">搜索推荐</a>
                        <a href="foo">友情链接</a>
                    </p>
                    <p>CopyRight © 小兔鲜儿</p>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default LayoutFooter;
