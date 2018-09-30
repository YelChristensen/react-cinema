import React from "react";
import Favourite from './Favourite'

class Favourites extends React.Component {


  render() {
    return (
      <div className='favourites'>
        {this.props.favFilmArr.map(favFilm=>(
            <Favourite key={favFilm.Title} favFilm={favFilm} />
        ))}     
        </div>
    );
  }
}

export default Favourites;
