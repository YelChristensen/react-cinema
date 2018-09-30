import React from "react";
import AddInfo from "./AddInfo";
import cx from "classnames";

class Film extends React.Component {
  constructor() {
    super();
    this.state = {
      favourite: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.favHandleClick = this.favHandleClick.bind(this);
  }

  handleClick(event) {
    this.props.makeFilmActive(this.props.film);
  }

  favHandleClick(event) {
    this.setState(
      {
        favourite: !this.state.favourite
      },
      () => this.props.addToFav(this.props.film)
    );
  }

  render() {
    const classes = cx(`film--btn `, {
      active: this.state.favourite
    });

    return (
      <div className='film' onClick={this.handleClick}>
        <img className='film--poster' src={this.props.film.Poster} />
        <h3 className='film--title'>{this.props.film.Title}</h3>
        <h4 className='film--year'>{this.props.film.Year}</h4>
        <p className={classes} onClick={this.favHandleClick} type="checkbox" name="favourite">
          <i className='fas fa-heart' />
        </p>
        <p className='film--type'>
          <b>type:</b> {this.props.film.Type}
        </p>

        {this.props.active ? <AddInfo imdbID={this.props.film.imdbID} /> : null}
      </div>
    );
  }
}

export default Film;
