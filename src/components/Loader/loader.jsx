import React from 'react';
import 'react-loader-spinner';
import { Rings } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Rings
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
    />
  );
};