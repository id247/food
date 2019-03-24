import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <div className="layout__header">
        <Link className="layout__logo" to="/">
          ~Awesome Logo~
        </Link>
      </div>
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default Layout;
