import React from 'react';
import Header from '../common/Header'
import Layout from '../common/Layout'
import MemeContents from '../meme/MemeContents';
import Footer from '../common/Footer';

const MemeDetail = () => {
    return (
        <>
        <Header/>
        <Layout>
            <MemeContents/>
        </Layout>
        <Footer/>
        </>
    );
};

export default MemeDetail;