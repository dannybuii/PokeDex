import React, { Component } from "react";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context(
    "./sprites/sprites/sprites/pokemon/",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
  };

  componentDidMount() {
    const name = this.props.name;
    const url = this.props.url;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    // const imageUrl = `./sprites/sprites/spirtes/${pokemonIndex}.png`;
    // const imageUrl = images[`${pokemonIndex}`];

    this.setState({
      name,
      imageUrl,
      pokemonIndex,
    });
  }
  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
          <h5 className="card-header">{this.state.pokemonIndex}</h5>
          <img
            className="rounded mx-auto d-block"
            src={this.state.imageUrl}
            alt="Pokemon"
          />
          <div className="card-body">
            <h5 className="card-title mx-auto">{this.state.name}</h5>
          </div>
        </div>
      </div>
    );
  }
}
