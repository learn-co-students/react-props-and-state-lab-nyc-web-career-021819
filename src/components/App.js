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



  onChangeType = (value) => {
    // console.log(event.tartget.filters.type)
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    
    });
  }

  filteredPets = () => {
      if (this.state.filters.type === 'all') {
        fetch('/api/pets')
        .then(re => re.json())
          .then(petsData => {
           return  this.setState({
            pets: petsData
          })
          }
        )
      } else if (this.state.filters.type === 'cat') {
        fetch('/api/pets?type=cat')
        .then(re => re.json())
        .then(petsData => {
           return  this.setState({
            pets: petsData
          })
          })
      }else if (this.state.filters.type === 'dog') {
        fetch('/api/pets?type=dog')
        .then(re => re.json())
        .then(petsData => {
           return  this.setState({
            pets: petsData
          })
          })
      }else if (this.state.filters.type === 'micropig') {
        fetch('/api/pets?type=micropig')
        .then(re => re.json())
        .then(petsData => {
           return  this.setState({
            pets: petsData
          })
          })
      }
      
    }
    
  

  render() {
    console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} filteredPets={this.filteredPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
