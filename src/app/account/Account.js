import { withStyles } from '@material-ui/core';
import {
  AccountConnection, FooterHelp, Layout,
  Link, Page
} from '@shopify/polaris';
import React, { useCallback, useState } from 'react';
import compose from 'recompose/compose';
import AccountProducts from './AccountProducts';
import accountStyles from './styles/Account.styles';

const Account = ({classes}) => {

  return (
    <>
     <AccountProducts/>
    </>
  );
}


// const mapStateToProps = (state) => ({
//   error: getProductsError(state),
//   products: getProducts(state),
//   pending: getProductsPending(state),
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//   fetchProducts: fetchProductsAction
// }, dispatch)


export default compose(
  withStyles(accountStyles),
  // connect(mapStateToProps, mapDispatchToProps)
)(Account);