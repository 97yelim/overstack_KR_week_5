import React from 'react';
import MemeCommentView from '../meme/MemeCommentView';
import Header from '../common/Header'
import Layout from '../common/Layout'


const MemeDetail = () => {
    return (
        <>
        <Header/>
        <Layout>
            <MemeCommentView/>
        </Layout>
        </>
    );
};

export default MemeDetail;