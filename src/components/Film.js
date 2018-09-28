import React from 'react';
import AddInfo from './AddInfo'

class Film extends React.Component {

    constructor(){
        super();
        
        this.handleClick=this.handleClick.bind(this);
        // this.favHandleClick=this.favHandleClick.bind(this)
    }

    handleClick(event){
        this.props.makeFilmActive(this.props.film)
        
    }

    // favHandleClick(event){
    //     this.props.addToFav(this.props.film)
    // }


render() { 

    return ( 
        <div onClick={this.handleClick}>
            <img src={this.props.film.Poster} />
            <h2>{this.props.film.Title}</h2>
            <h3>{this.props.film.Year}</h3>
            {/* <button onFavClick={this.favHandleClick} type="checkbox" name="favourite"><i class="fav-button fas fa-heart"/></button> */}
            <p><b>type:</b> {this.props.film.Type}</p>

            {this.props.active ?  <AddInfo imdbID={this.props.film.imdbID}/> : null}
           
        </div>
    );
}
}
 
export default Film;