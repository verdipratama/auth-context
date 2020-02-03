import React from 'react';

const AUTHCONTEXT = React.createContext({});

export const Provider = AUTHCONTEXT.Provider;
export const Consumer = AUTHCONTEXT.Consumer;
export default AUTHCONTEXT;
