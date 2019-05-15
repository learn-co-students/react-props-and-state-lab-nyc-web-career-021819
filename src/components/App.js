import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'
const API = "/api/pets"

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

  onChangeType = (e) => {
    this.setState({
      filters: {type: e.target.value
    }})
  }

  onAdoptPet = (id) => {
    let newPetsArray = this.state.pets.map(pet => pet.id === id ? {...pet, isAdopted: true} : pet)
    this.setState({
      pets: newPetsArray
    })
  }
  onFindPetsClick = () => {
    console.log("clicked")
    const queryParameter = this.state.filters.type;
    if (queryParameter === "all") {
      fetch(API)
        .then(res => res.json())
        .then(petsData => {
          console.log(petsData)
          this.setState({
            pets: petsData
          })
        })
    } else {
      fetch(`/api/pets?type=${queryParameter}`)
        .then(res => res.json())
        .then(petsData => {
          this.setState({
            pets: petsData
          })
        })
    }
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
              <PetBrowser petsArray={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
