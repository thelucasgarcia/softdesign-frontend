import React from 'react';
import Pagination, { PaginationProps } from 'rc-pagination';
import './styles.css';

const Paginate: React.FC<PaginationProps> = (props) => {
    return (
          <Pagination {...props} />
    );
}

export default Paginate;