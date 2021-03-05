// import { Auth } from 'aws-amplify';
import { withStyles } from '@material-ui/core';
import compose from 'recompose/compose';
import headerStyles from './styles/Header.styles';

const Header = ({ classes }) => {

    return (
        <>
            <h2>Welcome to Marketplace</h2>
            <p>Let's get you set up so you can sell yours products on Marketplace</p>
        </>
    );
}


// const mapDispatchToProps = dispatch => bindActionCreators({
// }, dispatch)

export default compose(
    withStyles(headerStyles),
    //  connect(mapStateToProps, mapDispatchToProps)
)(Header);