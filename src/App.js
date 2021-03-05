import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Main from './views/Main';

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
      <Main/>
    </>

  );
}

export default App;