import { withStyles } from '@material-ui/core';
import {
  Button, Card
} from '@shopify/polaris';
import React, { useState } from 'react';
import compose from 'recompose/compose';
import accountProductStatusStyles from './styles/AccountProductStatus.styles';

const AccountProductStatus = ({ classes }) => {

  const [products, setProducts] = useState([]);
  const [productsPublished, setProductsPublished] = useState([]);
  const [productsPublishing, setProductsPublishing] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('selectedResources');
  };

  return (
    <Card>
      <div>
        <h4>Product status</h4>
        <Button primary onClick={handleSubmit} >Push Products</Button>
      </div>
      <div>
        <div><span>{products.length}</span> products available to Marketplace</div>
        <div>
          <div>Published</div>
          <div><span>{productsPublished.length}</span>products</div>
        </div>
        <div>
          <div>Publishing</div>
          <div><span>{productsPublishing.length}</span>products</div>
        </div>
      </div>
      <div>Market place take 3 business days to review published products</div>
    </Card>
  );
}

export default compose(
  withStyles(accountProductStatusStyles),
  // connect(mapStateToProps, mapDispatchToProps)
)(AccountProductStatus);