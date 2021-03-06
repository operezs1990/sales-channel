// import { Auth } from 'aws-amplify';
import { withStyles } from '@material-ui/core';
import { Heading } from '@shopify/polaris';
import compose from 'recompose/compose';
import headerStyles from './styles/Header.styles';

const Header = ({ classes }) => {

    return (
        <div className={classes.header}>
            <Heading>
                <div className={classes.headerTitle}>Welcome to Marketplace</div>
                <div className={classes.headerSubTitle}>Let's get you set up so you can sell yours products on Marketplace</div>
            </Heading>
        </div>

    );
}


// const mapDispatchToProps = dispatch => bindActionCreators({
// }, dispatch)

export default compose(
    withStyles(headerStyles),
    //  connect(mapStateToProps, mapDispatchToProps)
)(Header);