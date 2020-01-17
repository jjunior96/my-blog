import React from 'react'
import propTypes from 'prop-types'

import * as S from './styled'
import getThemeColor from '../../utils/getThemeColor'

const RecommnendedPosts = ({ next, previous }) => (
  <S.RecommnendedWrapper>
    {previous && (
      <S.RecommnendedLink to={previous.fields.slug} className="previous" cover direction="right" bg={getThemeColor()} duration={0.6}>
        {previous.frontmatter.title}
      </S.RecommnendedLink>
    )}

    {next && (
      <S.RecommnendedLink to={next.fields.slug} className="next" cover direction="left" bg={getThemeColor()} duration={0.6}>
        {next.frontmatter.title}
      </S.RecommnendedLink>
    )}
  </S.RecommnendedWrapper>
)

RecommnendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    }),
  })
}

export default RecommnendedPosts