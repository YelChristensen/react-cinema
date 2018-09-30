import React from "react";
import Favourite from './Favourite'

class Favourites extends React.Component {

    constructor(){
        super();

        // this.receiverUp=this.receiverUp.bind(this)
        // this.receiverDelete=this.receiverDelete.bind(this)
        // this.receiverDown=this.receiverDown.bind(this)
    }


  render() {
    return (
      <div className='favourites'>
        {this.props.favFilmArr.map(favFilm=>(
            <Favourite key={favFilm.Title} moveUp={this.props.moveUp} favFilm={favFilm} />
        ))}     
        </div>
    );
  }
}

export default Favourites;
