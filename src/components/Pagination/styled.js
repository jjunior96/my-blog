import styled from 'styled-components';
import { Link } from 'gatsby';

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid var(--borders);
  color: var(--texts);
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;


`;

export const PaginationLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;


  &:hover {
    color: var(--hightlight);
  }
`