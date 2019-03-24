import React from 'react';
import qs from 'query-string';
import { defaultPerPage } from '../../constants/pagination';
import { Paging } from '../../types';
import PaginationLink from './PaginationLink';
import './styles.scss';

type Props = Paging;

const getPageLink = (params: Paging) => {
  const link = qs.stringify(params);

  return link ? `?${link}` : '';
};

const Pagination = ({ before, after }: Props) => {
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
