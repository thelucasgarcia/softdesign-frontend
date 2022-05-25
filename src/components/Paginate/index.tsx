import React from 'react';
import { PaginationProps } from 'rc-pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { RcPagination } from './styles';

const Paginate: React.FC<PaginationProps> = (props) => {
    return (
        <RcPagination 
          {...props} hideOnSinglePage
          prevIcon={<FaChevronLeft/>}
          nextIcon={<FaChevronRight />}
        />
    );
}

export default Paginate;