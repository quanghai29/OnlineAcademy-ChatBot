import React from 'react';
import Layout from '../../layout/Layout';
import classes from './Home.module.scss';
// import DevTools from '../../containers/DevTools';

const Home = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <p>Hello, I'm Home</p>
      </div>
      {/* <DevTools /> */}
    </Layout>
  );
};

export default Home;