// https://www.omdbapi.com/?apikey=b749b385&s=

import React from "react";
import Films from "./Films.js";
import Search from "./Search";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "Batman",
      pageNo: 1,
      filmArr: [],
      backgroundImg: "",
      film: "",
      poster: "",
      title: "",
      year: "",
      type: "",
      imdbID: ""
    };

    this.fetchMovies = this.fetchMovies.bind(this);
    this.receiveSearch = this.receiveSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    fetch(`https://www.omdbapi.com/?apikey=b749b385&s=${this.state.searchTerm}&page=${this.state.pageNo}`)
      .then(response => response.json())
      .then(body =>
        this.setState({
          filmArr: this.state.pageNo===1 ? body.Search : this.state.filmArr.concat(body.Search),
          backgroundImg: this.state.pageNo===1 ? body.Search[0].Poster : this.backgroundImg
        }),
      );
  }

  handleClick(event) {
    this.setState({
      pageNo: this.state.pageNo+1
    }, () => this.fetchMovies()
    );
  }

  receiveSearch(text) {
    this.setState({
        searchTerm: text,
        pageNo:1
      }, () => this.fetchMovies()
    );
  }

  render() {
    return (
      <div>
        <header>
          <img className="logo" src="video-camera.svg" />
          <h1>reel find</h1>
          <Search receiver={this.receiveSearch} />
        </header>
        <main>
          <Films filmArr={this.state.filmArr} />
        </main>
        <button onClick={this.handleClick}>load more...</button>
        <section>
          <h4>your favourites</h4>
        </section>
      </div>
    );
  }
}

export default App;
