import React, { Component } from 'react'
import Pet from '../../Pet/Pet'

class Cats extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/pets')
      .then(res => res.json())
      .then(res => this.setState({ cats: res }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        {this.state.cats.map(c => <Pet key={c.id} pet={c} />)}
      </>
    )
  }
}

export default Cats