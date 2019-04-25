import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

// render one pet from the array first, then multiple
  renderPets = () => {
    return this.props.pets.map(ipet => {
      return <Pet onAdoptPet={this.props.onAdoptPet} pet={ipet} key={ipet.id}/>
  })
}

  render() {
    return (
    <div className="ui cards">
    {this.renderPets()}
    </div>
    )
  }
}

export default PetBrowser
