import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import compose from 'recompose/compose';
import Account from '../app/account/Account';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Main = ({ user }) => {
    // const history = useHistory();
    // const { pathname } = useLocation();

    // useEffect(() => {
    //     if (pathname === '/') {
    //         history.push('/account');
    //     }
    // }, []);

    return (
        <>
            <Header />
            <div>
                <Switch>
                    <Route exact path='/account'>
                        <Account />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </>
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