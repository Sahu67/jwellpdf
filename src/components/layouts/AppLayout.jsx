import Title from "../shared/Title";
import Header from "./Header";

const AppLayout = () => WrappedComponent => {
    return (props) => (
        <>
            <Title />
            <Header />
            <WrappedComponent {...props} />
        </>
    );
}

export default AppLayout;