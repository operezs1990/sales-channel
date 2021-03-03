import React, {useState, useCallback} from 'react';
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
  EmptyState,
} from '@shopify/polaris';
import {ImportMinor} from '@shopify/polaris-icons';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';

const App = () => {
  const [open, setOpen] = useState(false);

  const primaryAction = {content: 'Select product'};

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
    <Page>
       <TitleBar
          title="Onlive"
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={open}
          onSelection={(resources) => handleSelection(resources)}
          onCancel={() => setOpen(false)}
        />
      <EmptyState
          heading="Add your products to Onlive channel"
          action={{
            content: 'Select products',
            onAction: () => toggleOpenResourcePicker(),
          }}
        >
          <p>Select products.</p>
        </EmptyState>
      </Page>
  );
}

export default App;