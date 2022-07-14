import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

function Pagination({ onChangePage }) {
  return (
	  <ReactPaginate
		  className={styles.pagination}
		  breakLabel="..."
		  nextLabel=">"
		  // onPageChange={handlePageClick}
		  onPageChange={event => onChangePage(event.selected + 1)}
		  pageRangeDisplayed={4}
		  // pageCount={pageCount}
		  pageCount={3}
		  previousLabel="<"
		  renderOnZeroPageCount={null}
	  />
  )
}

export default Pagination