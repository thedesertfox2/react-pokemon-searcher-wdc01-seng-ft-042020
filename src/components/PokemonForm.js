import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.props.newPokemon}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" value={this.props.name} required name="name" onChange={this.props.pokemonChange}/>
            <Form.Input fluid label="hp" placeholder="hp" value={this.props.hp} required name="hp" onChange={this.props.pokemonChange}/>
            <Form.Input fluid label="Front Image URL" value={this.props.front} required placeholder="url" name="front" onChange={this.props.pokemonChange}/>
            <Form.Input fluid label="Back Image URL" value={this.props.back} required placeholder="url" name="back" onChange={this.props.pokemonChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
