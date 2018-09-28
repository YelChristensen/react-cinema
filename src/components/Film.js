import React from 'react';

class Film extends React.Component {


render() { 
    return ( 
        <React.Fragment>
            <img src={this.props.film.Poster} />
            <h2>{this.props.film.Title}</h2>
            <h3>{this.props.film.Year}</h3>
            <h4>{this.props.film.Type}</h4>
        </React.Fragment>
    );
}
}
 
export default Film;