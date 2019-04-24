import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  
  render() {
    let makePets = this.props.pets.map(pet => <Pet key={pet.id} pet={pet} />)
      return <div className="ui cards">{makePets}</div>
    }
}



export default PetBrowser
