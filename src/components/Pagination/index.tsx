import qs from 'query-string';
import React from 'react';
import { Paging } from '../../types';
import PaginationLink from './PaginationLink';
import './styles.scss';

const getPageLink = (params: Paging) => {
  const link = qs.stringify(params);

  return link ? `?${link}` : '';
};

const Pagination = ({ before, after }: Paging) => {
  return (
    <div className="pagination">
      <div className="pagination__item">
        <PaginationLink to={getPageLink({ before })}>
          &larr; Previous
        </PaginationLink>
      </div>
      <div className="pagination__item">
        <PaginationLink to={getPageLink({ after })}>Next &rarr;</PaginationLink>
      </div>
    </div>
  );
};

export default Pagination;
