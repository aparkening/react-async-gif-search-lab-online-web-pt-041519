import React from 'react'

// Render as child of container
const GifList = props => {
  console.log(props);
  return (
    <div class="col">
      <ul>
        {props.imgs.map(img => <li><img key={img.url} src={img.url} alt="Giphy gif"/></li>)}
      </ul>
    </div>
  )
}

export default GifList