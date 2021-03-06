import { withStyles } from '@material-ui/core';
import {
  AccountConnection, FooterHelp, Layout,
  Link, Page
} from '@shopify/polaris';
import React, { useCallback, useState } from 'react';
import compose from 'recompose/compose';
import accountStyles from './styles/Account.styles';

const AccountConnection = ({classes}) => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [checkboxes, setCheckboxes] = useState([]);
  const [connected, setConnected] = useState(false);

  const handleFirstChange = useCallback((value) => setFirst(value), []);
  const handleLastChange = useCallback((value) => setLast(value), []);
  const handleEmailChange = useCallback((value) => setEmail(value), []);
  const handleCheckboxesChange = useCallback(
    (value) => setCheckboxes(value),
    [],
  );

  const toggleConnection = useCallback(
    () => {
      setConnected(!connected);
    },
    [connected],
  );

  const primaryAction = {content: 'New product'};

  const choiceListItems = [
    {label: 'I accept the Terms of Service', value: 'false'},
    {label: 'I consent to receiving emails', value: 'false2'},
  ];

  const accountSectionDescription = connected
    ? 'Disconnect your account from your Shopify store.'
    : 'Connect your account to your Shopify store.';

  const accountMarkup = connected ? (
    <DisconnectAccount onAction={toggleConnection} />
  ) : (
    <ConnectAccount onAction={toggleConnection} />
  );

  return (
    <Page
      title="Onlive"
      primaryAction={primaryAction}
    >
      <Layout>
        <Layout.AnnotatedSection
          title="Account"
          description={accountSectionDescription}
        >
          {accountMarkup}
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection
          title="Publishing"
          description=''
        >
          {accountMarkup}
        </Layout.AnnotatedSection>

        <Layout.Section>
          <FooterHelp>
            Need more details? Visit our{' '}
            <Link url="https://onlive.site">site</Link>.
          </FooterHelp>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

const ConnectAccount = ({onAction}) => {
  return (
    <AccountConnection
      action={{content: 'Connect', onAction}}
      details="No account connected"
      termsOfService={
        <p>
          By clicking Connect, you are accepting Onlive’s{' '}
          <Link url="https://onlive.site/terms-and-conditions">Terms and Conditions</Link>
        </p>
      }
    />
  );
}

const DisconnectAccount = ({onAction}) => {
  return (
    <AccountConnection
      connected
      action={{content: 'Disconnect', onAction}}
      accountName="Tom Ford"
      title={<Link url="http://google.com">Tom Ford</Link>}
      details="Account id: d587647ae4"
    />
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
)(AccountConnection);