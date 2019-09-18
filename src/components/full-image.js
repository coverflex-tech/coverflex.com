import React from "react"

export default ({src, height}) => {
  const style = {
    background: 'url(' + src + ') center no-repeat',
    height: height + 'px',
    backgroundSize: 'cover',
    margin: '3rem 0',
  }

  return <div style={style}></div>
}
