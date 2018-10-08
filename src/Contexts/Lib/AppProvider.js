import React from 'react';

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev
      }),
    children
  );

export default AppProvider;
