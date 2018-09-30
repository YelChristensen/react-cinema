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
      favFilmArr: []
    };

    this.fetchMovies = this.fetchMovies.bind(this);
    this.receiveSearch = this.receiveSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.receiveFavourite=this.receiveFavourite.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.recallFavourites=this.recallFavourites.bind(this);
    this.handleClearClick=this.handleClearClick.bind(this);
    this.clearAllFav=this.clearAllFav.bind(this);
    this.receiveMoveUp=this.receiveMoveUp.bind(this);
    this.receiveDelete=this.receiveDelete.bind(this);
    this.receiveMoveDown=this.receiveMoveDown.bind(this)
  
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

receiveMoveUp(favFilm){
  this.clearAllFav();
  const arrCopy = [...this.state.favFilmArr];
  const index = arrCopy.indexOf(favFilm);
  const removedArrItem = arrCopy.splice(index, 1)
  this.setState({
    favFilmArr: arrCopy.splice(index-1, 0, removedArrItem[0])
  });
  this.saveToLocalStorage();
  this.recallFavourites();
}

receiveMoveDown(favFilm){
  this.clearAllFav();
  const arrCopy = [...this.state.favFilmArr];
  const index = arrCopy.indexOf(favFilm);
  const removedArrItem = arrCopy.splice(index, 1)
  this.setState({
    favFilmArr: arrCopy.splice(index+1, 0, removedArrItem[0])
  });
  this.saveToLocalStorage();
  this.recallFavourites();
}

receiveDelete(favFilm){
  this.clearAllFav();
  const arrCopy = [...this.state.favFilmArr];
  const index = arrCopy.indexOf(favFilm);
  this.setState({
    favFilmArr: arrCopy.splice(index,1)
  });
  this.saveToLocalStorage();
  this.recallFavourites();
}

  render() {
    return (
      <div className='app'>
        <header>
          <div className='header--logoNname'>
          <img className="header--logo" src="whitecamera.svg" />
          
          <h1 className='header--name'>reel find</h1>
          </div>
          <Search receiver={this.receiveSearch} />
        </header>
        <main>
          <Films filmArr={this.state.filmArr} receiveFav={this.receiveFavourite} />
        </main>
        <button className='loadMore' onClick={this.handleClick}>load more...</button>
        <section className='favourites'>
          <h4 className='favourites--title'>your favourites:</h4>
          <Favourites favFilmArr={this.state.favFilmArr} moveUp={this.receiveMoveUp} moveDown={this.receiveMoveDown} delete={this.receiveDelete}/>
          <button className='favourites--clearAll' onClick={this.handleClearClick}>clear favourites</button>
        </section>
      </div>
    );
  }
}

export default App;
