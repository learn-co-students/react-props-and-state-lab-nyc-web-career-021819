import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onFindPetsClick = () => {
    // console.log(event)
    if(this.state.filters.type !== "all"){
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(pets => this.setState({pets: pets}))
    }else{
    fetch("/api/pets")
    .then(res => res.json())
    .then(pets => this.setState({pets: pets}))
    }
  }

  onChangeType = (event) => {
    console.log(event.target.value)
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onAdoptPet = (id) => {
    console.log(id)
    const newPetArray = [...this.state.pets]
    // console.log(newPetArray)
    // debugger
    const petIndex = newPetArray.findIndex(pet => pet.id === id)
    const targetPet = newPetArray.find(pet => pet.id === id)
    const newTargetPet = {...targetPet}
    newTargetPet.isAdopted = !newTargetPet.isAdopted
    newPetArray[petIndex] = newTargetPet
    // debugger
    // console.log(newPetArray)
    this.setState({
      pets: newPetArray
      
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets= {this.state.pets} onAdoptPet = {this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
