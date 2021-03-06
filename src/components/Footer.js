import { withStyles } from "@material-ui/core";
import { FooterHelp, Link } from "@shopify/polaris";
import compose from "recompose/compose";
import footerStyles from './styles/Footer.styles';

const Footer = ({classes}) => {

    return (

            <FooterHelp>
                All rights reserved{' '}
                <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
                    Onlive{' '}
                </Link>
            2021
        </FooterHelp>

    );
}

export default compose(
    withStyles(footerStyles),
    //  connect(mapStateToProps, mapDispatchToProps)
)(Footer);