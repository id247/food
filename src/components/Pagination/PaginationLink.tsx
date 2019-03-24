import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to?: string;
  children: JSX.Element | string;
};

const PaginationLink = ({ to, children }: Props) => {
  if (!to) {
    return <span>{children}</span>;
  }

  return (
    <Link to={to} className="pagination__link">
      {children}
    </Link>
  );
};

export default PaginationLink;
