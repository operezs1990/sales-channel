import {
  Page
} from '@shopify/polaris';
import React, { useCallback, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Products from './components/Products';

const App = () => {
  const [open, setOpen] = useState(false);

  const primaryAction = { content: 'Select product' };

  const toggleOpenResourcePicker = useCallback(
    () => {
      setOpen(!open);
    },
    [open],
  );

  const handleSelection = useCallback(
    (resources) => {
      const idsFromResources = resources.selection.map((product) => product.id);
      setOpen(false);
      console.log(idsFromResources);
    },
    [open],
  );

  return (
    <>
      <Redirect to="/products" />
    </>
  );
}

export default App;