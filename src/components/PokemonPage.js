import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    allPokemon: [], 
    searchForm: "", 
    name: "", 
    hp: "", 
    front: "", 
    back: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemon => this.setState({allPokemon: pokemon}))
  }

  searchForm = (event) => {
    this.setState({searchForm: event.target.value})
  }

  filteredPokemon = () => {
    return this.state.allPokemon.filter(pokemon => pokemon.name.includes(this.state.searchForm))
  }

  newPokemon = (event) => {
    event.preventDefault() 
    let body = {
      name: this.state.name,
      hp: parseInt(this.state.hp),
      sprites: {
        front: this.state.front,
        back: this.state.back
      }
    }
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
    .then(newPokemon => this.setState({
      allPokemon: [...this.state.allPokemon, newPokemon],
      name: '',
      hp: '',
      front: '',
      back: ''
    }))
    
  }

  formChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }


  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemon={this.newPokemon} pokemonChange={this.formChange} name={this.state.name} hp={this.state.hp} front={this.state.front} back={this.state.back}/>
        <br />
        <Search onSearchChange={this.searchForm} searchChange={this.formChange}/>
        <br />
        <PokemonCollection pokemon={this.filteredPokemon()} />
      </Container>
    )
  }
}

export default PokemonPage
