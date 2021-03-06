import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import {
  Layout,
  Page,
  FooterHelp,
  Card,
  Link,
  Button,
  FormLayout,
  TextField,
  AccountConnection,
  ChoiceList,
  SettingToggle,
  Heading,
  Badge,
} from '@shopify/polaris';
import { ImportMinor } from '@shopify/polaris-icons';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core';
import accountProductsStyles from './styles/AccountProducts.styles';
import AccountProductStatus from './AccountProductStatus';
import { Provider, ResourcePicker } from '@shopify/app-bridge-react';

const AccountProducts = ({ classes }) => {

  const [products, setProducts] = useState([]);
  const [productsPublished, setProductsPublished] = useState([]);
  const [productsPublishing, setProductsPublishing] = useState([]);

  const [openPicker, setOpenPicker] = useState(false);

  const config = { apiKey: '82fd034f42500193055a4ff648def6ed', shopOrigin: 'orlandoshopstore.myshopify.com/', forceRedirect: true };


  return (
    <Page>
      <Layout>
        <Layout.AnnotatedSection
          title="Publishing"
          description="Product that are being synced tou your catalog, or are errors preventing their sync, are shown here."
        >
          <Card sectioned title="Product status" actions={[{ content: 'Push Products', onAction: () => setOpenPicker(true) }]}>
            <Card.Section>
              <div className={classes.productInfo}>
                <div className={classes.info}><span>{products.length} </span> products available to Marketplace </div>
                <Button size="slim">Check All</Button>
              </div>
              <div className={classes.info}>
                <div className={classes.badgeWidth}>
                  <Badge><div className={clsx(classes.customBadge, classes.firstBadge)}><span></span>Published</div></Badge>
                </div>
                <div className={classes.infoFont}><span>{productsPublished.length} </span>products</div>
              </div>
              <div className={classes.info}>
                <div className={classes.badgeWidth}>
                  <Badge><div className={clsx(classes.customBadge, classes.secondBadge)}><span></span>Publishing</div></Badge>
                </div>
                <div className={classes.infoFont}><span>{productsPublishing.length} </span>products</div>
              </div>
            </Card.Section>

            <Card.Section>
              <p>Market place take 3 business days to review published products</p>
            </Card.Section>

          </Card>
        </Layout.AnnotatedSection>
      </Layout>
      <Provider config={config}>
        <ResourcePicker resourceType="Product" open={openPicker} onCancel={() => setOpenPicker(false)} />
      </Provider>
    </Page>

  );
}

export default compose(
  withStyles(accountProductsStyles),
  // connect(mapStateToProps, mapDispatchToProps)
)(AccountProducts);