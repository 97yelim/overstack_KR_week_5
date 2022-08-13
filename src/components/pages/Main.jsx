import React from 'react';
import Header from '../common/Header';
import Layout from '../common/Layout';
import BestTopTenSlide from '../main/BestTopTenSlide';
import BoardLayout from '../main/BoardLayout';
import CreateBanner from '../main/CreateBanner';

const Main = () => {
    return (
        <>  
            <Header/>
            <Layout>
                <BestTopTenSlide/>
            </Layout>
            <CreateBanner/>
            <Layout>
                <BoardLayout/>
            </Layout>
        </>
    );
};

export default Main;