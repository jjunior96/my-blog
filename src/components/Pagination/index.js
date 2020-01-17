import React from 'react'
import propTypes from 'prop-types'

import * as S from './styled'
import getThemeColor from '../../utils/getThemeColor'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    {!isFirst && <S.PaginationLink to={prevPage} cover direction="left" bg={getThemeColor()} duration={0.6}>← página anterior</S.PaginationLink>}
    
    <p>
      {currentPage} de {numPages}
    </p> 

    {!isLast && <S.PaginationLink to={nextPage} cover direction="right" bg={getThemeColor()} duration={0.6}>próxima página →</S.PaginationLink>}
    
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
