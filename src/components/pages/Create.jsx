import React from 'react';
import Header from '../common/Header';
import Layout from '../common/Layout';
import CreateMeme from '../create/CreateMeme'

const Create = () => {
    return (
        <>
        <Header/>
            <Layout>
                <CreateMeme/>
            </Layout>
        </>
    );
};

export default Create;