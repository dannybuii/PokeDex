import React, { Component } from "react";

import PokemonCard from "./PokemonCard";
import Loading from "../layouts/Loading";
import axios from "axios";
let counter = 0;

export default class PokemonList extends Component {
  state = {
    url: `https://pokeapi.co/api/v2/pokemon?offset=${counter}&limit=20`,
    pokemon: null,
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.state.url = this.setState({ pokemon: res.data["results"] });
  }

  next() {
    counter = counter + 20;
    this.setState({
      url: `https://pokeapi.co/api/v2/pokemon?offset=${counter}&limit=20`,
    });
    this.componentDidMount();
    console.log(this.state.url);
  }

  back() {
    counter = counter - 20;
    this.setState({
      url: `https://pokeapi.co/api/v2/pokemon?offset=${counter}&limit=20`,
    });
    this.componentDidMount();
    console.log(this.state.url);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.next()}>Next</button>
        <button onClick={() => this.back()}>Back</button>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
