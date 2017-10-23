import React from 'react'
import PropTypes from 'prop-types'

const PlaceArticle = ({ name, summary }) => (
  <article>
     <h2>{name}</h2>
     <p>{summary}</p>
  </article>
)

PlaceArticle.propTypes = {
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default PlaceArticle;
