import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPet = () => {
    return this.props.pets.map(pet=>{
      return <Pet
      pet={pet}
      isAdopted
      onAdoptPet={this.props.onAdoptPet}
      />
    })
  }

  render() {
    return <div className="ui cards">
    {this.renderPet()}
    </div>
  }
}

export default PetBrowser
