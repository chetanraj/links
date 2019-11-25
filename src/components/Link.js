import React from 'react'

const Link = (props) => {
  return (
    <a className="link" target="_blank" rel="noopener noreferrer" href={props.href}>{props.label}</a>
  )
}

export default Link;