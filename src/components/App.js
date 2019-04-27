import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {

  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }

  onChangeType = (input) => {
    this.setState({
      filters: {
        type: input
      }
    })
  }

  onFindPetsClick = () => {
    let fetchParam = ""
    if (this.state.filters.type === "all") {
      fetchParam = ""
    } else if (this.state.filters.type === "cat") {
      fetchParam = "?type=cat"
    } else if (this.state.filters.type === "dog") {
      fetchParam = "?type=dog"
    } else if (this.state.filters.type === "micropig") {
      fetchParam = "?type=micropig"
    }
    fetch(`/api/pets${fetchParam}`)
      .then(res => res.json())
      .then(filteredPets => {
        this.setState({
          pets: filteredPets
        })
      })
  }

  onAdoptPet = (id) => {
    let newPets = this.state.pets.map(pet => {
      if (pet.id === id) {
        let newPet = {...pet, isAdopted: true}
        return newPet
      } else {
        return pet
      }
    })
    this.setState({
      pets: newPets
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
