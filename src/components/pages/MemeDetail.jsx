import React from 'react';
import Header from '../common/Header'
import Layout from '../common/Layout'
import MemeContents from '../meme/MemeContents';


const MemeDetail = () => {
    return (
        <>
        <Header/>
        <Layout>
            <MemeContents/>
        </Layout>
        </>
    );
};

export default MemeDetail;