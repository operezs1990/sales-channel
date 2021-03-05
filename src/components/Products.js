import { withStyles } from '@material-ui/core';
import { bindActionCreators } from '@reduxjs/toolkit';
import {
  Button,
  Card,
  DisplayText,
  IndexTable,
  Page,
  TextStyle,
  useIndexResourceState
} from '@shopify/polaris';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { fetchProductsAction, getProducts, getProductsError, getProductsPending } from '../reducers/productSlice';
import productsStyles from './styles/Products.styles';

const Products = ({ classes, fetchProducts, }) => {

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedResources);
  };

  const customers = [
    {
      id: '3411',
      url: 'customers/341',
      name: 'Mae Jemison',
      location: 'Decatur, USA',
      orders: 20,
      amountSpent: '$2,400',
    },
    {
      id: '2561',
      url: 'customers/256',
      name: 'Ellen Ochoa',
      location: 'Los Angeles, USA',
      orders: 30,
      amountSpent: '$140',
    },
  ];
  const resourceName = {
    singular: 'customer',
    plural: 'customers',
  };

  const {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange,
  } = useIndexResourceState(customers);

  const rowMarkup = customers.map(
    ({ id, name, location, orders, amountSpent }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <TextStyle variation="strong">{name}</TextStyle>
        </IndexTable.Cell>
        <IndexTable.Cell>{location}</IndexTable.Cell>
        <IndexTable.Cell>{orders}</IndexTable.Cell>
        <IndexTable.Cell>{amountSpent}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  return (
    <Page>
      <div className={classes.header}>
        <DisplayText size="large">Manage the products of your sales channel</DisplayText>
      </div>
      <Card sectioned>
        <div className={classes.submitButton} >
          <Button primary onClick={handleSubmit} >Push Products</Button>
        </div>
        <IndexTable
          resourceName={resourceName}
          itemCount={customers.length}
          selectedItemsCount={
            allResourcesSelected ? 'All' : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            { title: 'Name' },
            { title: 'Location' },
            { title: 'Order count' },
            { title: 'Amount spent' },
          ]}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    </Page>
  );

}

const mapStateToProps = (state) => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts: fetchProductsAction
}, dispatch)


export default compose(
  withStyles(productsStyles),
  connect(mapStateToProps, mapDispatchToProps)
)(Products);