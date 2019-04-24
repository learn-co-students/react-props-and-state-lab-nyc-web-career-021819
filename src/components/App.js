import React from 'react'
// import allPets from '../data/pets'
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

handleFindPetsClick = event => {
    let url = '/api/pets'

    if (this.state.filters.type !== 'all') {
            url += `?type=${this.state.filters.type}`;
          }

    fetch(url)
          .then(res => res.json())
          .then(pets => this.setState({ pets }));

}

handleChangeType = event =>{
  this.setState({
    filters:
          {...this.state.filters,
          type: event.target.value}
      })
  }

onAdoptPet = (id) =>{
  let arr = this.state.pets.map(p => {
    if(p.id === id){
      return{...p, isAdopted: !p.isAdopted}}else{
      return p
    }
    // p.id === id ? {...p, isAdopted: !p.isAdopted} : p
    })

this.setState({
  pets: arr
})
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
              <Filters
               onChangeType={this.handleChangeType}
               onFindPetsClick={this.handleFindPetsClick}/>
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
