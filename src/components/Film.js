import React from 'react';
import AddInfo from './AddInfo'

class Film extends React.Component {

    constructor(){
        super();
        
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(event){
        this.props.makeFilmActive(this.props.film)
        
    }


render() { 

    return ( 
        <div onClick={this.handleClick}>
            <img src={this.props.film.Poster} />
            <h2>{this.props.film.Title}</h2>
            <h3>{this.props.film.Year}</h3>
            <p><b>type:</b> {this.props.film.Type}</p>

            {this.props.active ?  <AddInfo imdbID={this.props.film.imdbID}/> : null}
           
        </div>
    );
}
}
 
export default Film;