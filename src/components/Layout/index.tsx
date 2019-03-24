import React from 'react';
import './styles.scss';

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Layout = ({ children }: Props) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
