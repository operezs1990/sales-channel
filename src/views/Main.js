import { Page } from '@shopify/polaris';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import compose from 'recompose/compose';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Routes from '../routes';


const Main = ({ user }) => {
    // const history = useHistory();
    // const { pathname } = useLocation();

    // useEffect(() => {
    //     if (pathname === '/') {
    //         history.push('/account');
    //     }
    // }, []);

    return (
        <Page>
            <Header />

            <Routes />

            <Footer />
        </Page>
    );
}

// const mapStateToProps = (state) => ({
//     user: getUser(state)
// });

// const mapDispatchToProps = dispatch => bindActionCreators({
// }, dispatch)

export default compose(
    // withStyles(
    //     menuStyles,
    // ),
    // connect(mapStateToProps, mapDispatchToProps)
)(Main);