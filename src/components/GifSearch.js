import React from 'react'

class GifSearch extends React.Component {
  state = { q: ""}

  // Push q to fetchImgs() prop
  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchImgs(this.state.q)
  }

  render() {
    return (
      <div class="col">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.q} onChange={event => this.setState({q: event.target.value})} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default GifSearch