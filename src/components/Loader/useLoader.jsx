import React, { useState } from 'react';
import Loader from './Loader.component';

const useLoader = () => {
  const [visible, setVisible] = useState(false);

  const showLoader = () => setVisible(true);
  const hideLoader = () => setVisible(false);

  const loader = visible ? <Loader isLoading /> : null;

  return [loader, showLoader, hideLoader];
};

export default useLoader;
