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

  onChangeType = (event) => {
    this.setState({...this.state, filters: {type: event.target.value}})
  };

  onFindPetsClick = (event) => {
    (async () => {
      const petUrl = this.state.filters.type === 'all' ? '/api/pets' : '/api/pets' + `?type=${this.state.filters.type}`
      const resp = await fetch(petUrl)
      const jsonResp = await resp.json()
      this.setState({...this.state, pets: jsonResp})
    })();
    }

    onAdoptPet = (petID) => {
      // update the adopted key of the dog from pet in state
      // first update isAdopted inside of the pet object by creating a new
      // pet object and overwriting the key using ... spread operator.
      // then, take the original pets array, and update it with that value
      // const newDog = {...pet, isAdopted: true}
      // console.log("newDog", newDog)
      // find the index of the array we need to replace
      const peti = this.state.pets.find(pet => petID === pet.id )
      let i = this.state.pets.findIndex(pet => petID === pet.id )
      this.setState({pets: [...this.state.pets.slice(0,i), {...peti, isAdopted: true}, ...this.state.pets.slice(i+1)]}, console.log(this.state.pets))
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
              <Filters state={this.state} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
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
