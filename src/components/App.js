// https://www.omdbapi.com/?apikey=b749b385&s=

import React from "react";
import Films from "./Films.js";
import Search from "./Search";
import Favourites from './Favourites'

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
      imdbID: "",
      favFilmArr: []
    };

    this.fetchMovies = this.fetchMovies.bind(this);
    this.receiveSearch = this.receiveSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.receiveFavourite=this.receiveFavourite.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.recallFavourites=this.recallFavourites.bind(this);
    this.handleClearClick=this.handleClearClick.bind(this);
    this.clearAllFav=this.clearAllFav.bind(this)
  
  }

  componentDidMount() {
    this.fetchMovies();
    if(localStorage.getItem('favourites') !== null){
    this.recallFavourites()};
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

  receiveFavourite(film){
    this.setState({
      favFilmArr: this.state.favFilmArr.concat(film)
    }, () => this.saveToLocalStorage())
  }

  

saveToLocalStorage(){
    let favJson = JSON.stringify(this.state.favFilmArr)
    localStorage.setItem('favourites', favJson)
}

 recallFavourites(){
   let retrievedFav = localStorage.getItem('favourites');
     this.setState({
       favFilmArr: JSON.parse(retrievedFav)
     })
   
 }

 handleClearClick(){
   this.setState({
     favFilmArr: []
   }, ()=> this.clearAllFav())
}

clearAllFav(){
  localStorage.removeItem('favourites');
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
          <Films filmArr={this.state.filmArr} receiveFav={this.receiveFavourite} />
        </main>
        <button onClick={this.handleClick}>load more...</button>
        <section>
          <h4>your favourites</h4>
          <Favourites favFilmArr={this.state.favFilmArr} />
          <button onClick={this.handleClearClick}>clear favourites</button>
        </section>
      </div>
    );
  }
}

export default App;
