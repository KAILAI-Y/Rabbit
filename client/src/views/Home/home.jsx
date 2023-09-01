import React from 'react';
import HomeBanner from './components/HomeBanner';
import HomeCategory from './components/HomeCategory';
import HomeNew from './components/HomeNew';
import HomeHot from './components/HomeHot';
// import HomePanel from './components/HomePanel';
import HomeProduct from './components/HomeProduct';

function Home() {
  return (
    <>
      <div className={`container`}>
        <HomeCategory />
        <HomeBanner />
      </div>
      <div>
        <HomeNew />
        <HomeHot />
        <HomeProduct />
      </div>
    </>
  );
}

export default Home;