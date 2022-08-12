import Layout from '../common/Layout';
import MemeContents from '../meme/MemeContents'
import MemeCommentView from '../meme/MemeCommentView'

const BestDetail = () => {
    return (
        <>
            <Layout>
                <MemeContents/>
                <MemeCommentView/>
            </Layout>
        </>
    );
};

export default BestDetail;