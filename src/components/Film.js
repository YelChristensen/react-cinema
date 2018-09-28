import React from 'react';
import AddInfo from './AddInfo'

class Film extends React.Component {

    constructor(){
        super();
        this.state = {
            showingAddInfo:false
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            showingAddInfo: !this.state.showingAddInfo
        })
    }

render() { 
    return ( 
        <div onClick={this.handleClick}>
            <img src={this.props.film.Poster} />
            <h2>{this.props.film.Title}</h2>
            <h3>{this.props.film.Year}</h3>
            <h4>{this.props.film.Type}</h4>

            {this.state.showingAddInfo ?  <AddInfo imdbID={this.props.film.imdbID}/> : null}
           
        </div>
    );
}
}
 
export default Film;