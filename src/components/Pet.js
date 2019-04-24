import React from 'react'

class Pet extends React.Component {

  state = {
    isAdopted: "ui primary button",
    notAdopted: "ui disabled button"
  }

  adopted = () => {
    if (this.props.pet.isAdopted === false) {
      this.setState({ isAdopted: "ui disabled button",
                      notAdopted: "ui primary button"
                     })
    }else {
      this.setState({ isAdopted: "ui primary button",
                       notAdopted: "ui disabled button"
                    })
    }
  }
  
  render() {
    // console.log(this.props.pet)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'female' ? '♀' : '♂' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={this.state.notAdopted} onClick={this.adopted}>Already adopted</button>
          <button className={this.state.isAdopted} onClick={this.adopted}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
