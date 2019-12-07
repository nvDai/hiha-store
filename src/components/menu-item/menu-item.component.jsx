/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({
  title, imageUrl, size, linkUrl, match, history,
}) => (
  <div
    className={ `menu-item ${size}` }
    onClick={ () => history.push(`${match.url}${linkUrl}`) }
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{ title.toUpperCase() }</h1>
      <p className="sub-title">SHOP NOW</p>
    </div>
  </div>
)
export default withRouter(MenuItem)
