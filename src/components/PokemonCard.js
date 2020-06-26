import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  renderToggle = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.renderToggle}>
            <img src={this.state.clicked ? this.props.pokemonObj.sprites.back : this.props.pokemonObj.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonObj.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
