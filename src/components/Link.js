import React from 'react'

const Link = (props) => {
  return (
    <a className="link" target="_blank" href={props.href}>{props.label}</a>
  )
}

export default Link;