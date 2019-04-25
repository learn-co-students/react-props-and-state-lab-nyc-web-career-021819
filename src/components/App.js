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

  fetchUrl = () => { return (this.state.filters.type === 'all') ? '/api/pets' : `/api/pets?type=` + this.state.filters.type}

  onChangeType = (event) => {
    this.setState({
      filters: { type: event.target.value}
    })
  }

  onFindPetsClick = () => {
    fetch(this.fetchUrl())
    .then(response => response.json())
    .then(myJson => this.setState({pets: myJson}))
  }

  onAdoptPet = (event) => {
    const pet = this.state.pets.find(pet => {
      return (pet.id === event.target.id)
    })
    pet.isAdopted = true
    const petIndex = this.state.pets.findIndex(pet => event.target.id === pet.id)
    this.state.pets[petIndex] = pet
    event.target.className = 'ui disabled primary button'
    this.setState({})
  }

  render() {
    console.log(this.state);
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
