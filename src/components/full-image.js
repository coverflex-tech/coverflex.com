import React from "react"

export default ({src, height, margin = '3rem 0'}) => {
  const style = {
    background: 'url(' + src + ') center no-repeat',
    height: height + 'px',
    backgroundSize: 'cover',
    margin: margin,
  }

  return <div style={style}></div>
}
