import React from "react";

class Favourite extends React.Component {
 
   


  render() {
    return (
      <div>
        <img className="fav--img" src={this.props.favFilm.Poster} />
        <p>{this.props.favFilm.Title}</p>
      </div>
    );
  }
}

export default Favourite;
