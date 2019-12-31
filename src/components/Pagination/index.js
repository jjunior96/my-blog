import React from 'react'
import propTypes from 'prop-types'

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    {!isFirst && <S.PaginationLink to={prevPage}>← página anterior</S.PaginationLink>}
    
    <p>
      {currentPage} de {numPages}
    </p> 

    {!isLast && <S.PaginationLink to={nextPage}>próxima página →</S.PaginationLink>}
    
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,  
  nextPage: propTypes.string,
}

export default Pagination
