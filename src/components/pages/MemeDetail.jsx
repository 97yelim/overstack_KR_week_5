import Layout from '../common/Layout';
import BestContents from '../best/BestContents'
import BestCommentView from '../best/BestCommentView'

const BestDetail = () => {
    return (
        <>
            <Layout>
                <BestContents/>
                <BestCommentView/>
            </Layout>
        </>
    );
};

export default BestDetail;