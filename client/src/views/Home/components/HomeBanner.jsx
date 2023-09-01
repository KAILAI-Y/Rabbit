import React, {useState, useEffect} from "react";
import { Carousel } from 'antd';
import styles from '../../../styles/Home/homeBanner.module.css'; 
import { Banner } from '../../../api/Home.js';

function HomeBanner () {
    const [bannerList, setBannerList] = useState([]);

    useEffect(() => {
        Banner.get().then(data => {
        setBannerList(data);
        }); 

    }, [])

    return (
        <div className={styles.home_banner}>
            <Carousel autoplay>
                {bannerList.map((item) => (
                <div key={item.id}>
                    <img src={item.imgUrl} alt="" className={styles.banner_content} />
                </div>
                ))}
            </Carousel>
        </div>
    );
}

export default HomeBanner;