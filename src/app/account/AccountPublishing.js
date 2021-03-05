import React, { useState, useCallback } from 'react';
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
} from '@shopify/polaris';
import { ImportMinor } from '@shopify/polaris-icons';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core';
import accountPublishingStyles from './styles/AccountPublishing.styles';

const AccountPublishing = ({ classes }) => {

  return (
    <>
      <h4>Publishing</h4>
      <p>Product that are being synced tou your catalog, or are errors preventing their sync, are shown here.</p>
    </>
  );
}

export default compose(
  withStyles(accountPublishingStyles),
  // connect(mapStateToProps, mapDispatchToProps)
)(AccountPublishing);