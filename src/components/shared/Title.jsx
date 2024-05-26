import { Helmet } from 'react-helmet-async';

const Title = ({ title="JwellPDF - Jewelry Module", description="This is just a demo module to convert jewelry excel data to pdf", keywords="jewelry, excel" }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    );
}

export default Title;