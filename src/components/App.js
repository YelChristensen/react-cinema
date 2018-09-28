// https://www.omdbapi.com/?apikey=b749b385&s=


import React from 'react';
import Films from './Films.js';
import Search from './Search'

class App extends React.Component {
  constructor(){
    super();

    this.state={
      searchTerm: 'Batman',
      filmArr: [],
      backgroundImg:'',
      film: '',
      poster: '',
      title: '',
      year: '',
      type: '',
      imdbID: ''
    }
    
    this.fetchMovies=this.fetchMovies.bind(this);
    this.receiveSearch=this.receiveSearch.bind(this)
  }

  componentDidMount(){
    this.fetchMovies();
  }

  fetchMovies(){
    fetch(`https://www.omdbapi.com/?apikey=b749b385&s=${this.state.searchTerm}`)
    .then(response => response.json())
    .then(body=>this.setState({
      filmArr: body.Search,
      backgroundImg: body.Search[0].Poster
    }))
  }

 

    receiveSearch(text){
      this.setState({
        searchTerm: text
      }, () => this.fetchMovies())
    }

  render(){
    return (
      <div>
        <header>
          <img className="logo" src="video-camera.svg" />
          <h1>reel find</h1>
          <Search receiver={this.receiveSearch}/>
        </header>
        <main>
          <Films filmArr={this.state.filmArr} />
        </main>
        <button>load more...</button>
        <section><h4>your favourites</h4></section>
      </div>
    )
  }
}

export default App;
