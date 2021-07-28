import React from 'react';
import Spinner from '../component/Spinner';

const WithSpinner =
  WrappedComponent =>
  ({ isFetching, ...otherProps }) =>
    isFetching ? <Spinner /> : <WrappedComponent {...otherProps} />;

export default WithSpinner;
