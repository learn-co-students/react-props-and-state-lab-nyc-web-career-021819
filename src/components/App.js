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

  changeType = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: e.target.value
      }
    })
  }

  fetchPets = () => {
    if(this.state.filters.type === 'all'){
      fetch("/api/pets")
      .then(res=>res.json())
      .then((data) => {
        this.setState({
            pets: data
          })
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res=>res.json())
      .then((data) => {
        this.setState({
            pets: data
          })
      })
    }
  }

  adoptPet = (petId) => {
    // const pet = this.state.pets.find(pet => pet.id === petId)
    // let updatedPet = {...pet, isAdopted: true}

    // const newArr = this.state.pets.filter(pet => pet.id !== petId)

    // const newPetsArr = this.state.pets.map(pet => pet.id === petId ? {...pet, isAdopted: true} : pet)

    this.setState(prevState => ({
      pets: prevState.pets.map(pet => pet.id === petId ? {...pet, isAdopted: true} : pet)
    })
  )
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
              <Filters
              onChangeType={this.changeType}
              onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets={this.state.pets}
              onAdoptPet={this.adoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
