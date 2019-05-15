import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
    <div className="ui cards">
      {console.log(this.props.petsArray)}
      {this.props.petsArray.map(pet => <Pet petData={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>)}
    </div>
  )
  }
}

export default PetBrowser
