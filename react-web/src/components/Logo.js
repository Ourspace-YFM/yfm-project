import React from "react"

export default function LightText({
  src,
  alt,
  className

}) {
  return (
    <img src={ src } alt={ alt } className={"logo " + className}/>
  )
}
