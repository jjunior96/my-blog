import styled from 'styled-components';
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid var(--borders);
  color: var(--texts);
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  ${media.lessThan("large")`
    font-size: .8rem;
    padding: 1rem;
  `}

`;

export const PaginationLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;


  &:hover {
    color: var(--hightlight);
  }
`