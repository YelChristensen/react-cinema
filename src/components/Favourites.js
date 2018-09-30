import React from "react";
import Favourite from './Favourite'

class Favourites extends React.Component {



  render() {
    return (
      <div className='favourites--films'>
        {this.props.favFilmArr.map(favFilm=>(
            <Favourite key={favFilm.Title} moveUp={this.props.moveUp} moveDown={this.props.moveDown} delete={this.props.delete} favFilm={favFilm} />
        ))}     
        </div>
    );
  }
}

export default Favourites;
