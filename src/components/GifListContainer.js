import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

// Use Container syntax
class GifListContainer extends React.Component {
  state = { imgs: [] }

  // Fetch giphy images after render
  componentDidMount() {
    this.fetchImgs()
  }

  // Fetch giphy data and store first 3 in state
  fetchImgs = (q = 'dolphin') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=IxIyt5a18qZspFEWp7ZNEg6iTIr0DpGq&rating=g&limit=3`)
    .then(response => response.json())
    .then(({data}) => {
      this.setState({
        imgs: data.map(i => ({url: i.images.original.url}) )
      })
    })
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <GifSearch fetchImgs={this.fetchImgs}/>
          <GifList imgs={this.state.imgs}/>
        </div>
      </div>
    );
  }
}
export default GifListContainer;