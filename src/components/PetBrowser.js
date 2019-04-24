import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

handlePets=()=>{
  return this.props.pets.map(p => <Pet key={p.id} pet={p} onAdoptPet={this.props.onAdoptPet}/>)
}

  render() {

    return (<div className="ui cards" >
    {this.handlePets()}
    </div>)
  }
}

export default PetBrowser
