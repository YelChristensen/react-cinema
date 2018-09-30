import React from "react";

class Favourite extends React.Component {

    constructor(){
        super();


        // this.handleClick=this.handleClick.bind(this)
        // this.handleDeleteClick=this.handleDeleteClick.bind(this)
        // this.handleDownClick=this.handleDownClick.bind(this)
    }

    // handleClick(event){
    //     this.props.moveUp(this.props.favFilm)
    // }

    // handleDeleteClick(event){
    //     this.props.delete(this.props.favFilm)
    // }

    // handleDownClick(event){
    //     this.props.moveDown(this.props.favFilm)
    // }
 
  render() {
    return (
      <div className='fav--film'>
        <img className="fav--img" src={this.props.favFilm.Poster} />
        <p className='fav--title'>{this.props.favFilm.Title}</p>
        {/* <i onClick={this.handleClick} className="fas fa-arrow-alt-circle-up"></i> */}
        {/* <i onClick={this.handleDeleteClick} className="fas fa-minus-circle"></i>
        <i onClick={this.handleDownClick} className="fas fa-arrow-alt-circle-down"></i> */}
      </div>
    );
  }
}

export default Favourite;
