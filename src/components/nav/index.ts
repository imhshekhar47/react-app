import React from 'react';

export interface AppLinkProps {
    icon?: React.ReactNode,
    lable: string,
    path: string,
    children?: Array<AppLinkProps>
};

export * from './PageNav';