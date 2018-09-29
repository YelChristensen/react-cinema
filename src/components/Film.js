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
    const classes = cx(`fav-button `, {
      active: this.state.favourite
    });

    return (
      <div onClick={this.handleClick}>
        <img src={this.props.film.Poster} />
        <h2>{this.props.film.Title}</h2>
        <h3>{this.props.film.Year}</h3>
        <button className={classes} onClick={this.favHandleClick} type="checkbox" name="favourite">
          <i className='fas fa-heart' />
        </button>
        <p>
          <b>type:</b> {this.props.film.Type}
        </p>

        {this.props.active ? <AddInfo imdbID={this.props.film.imdbID} /> : null}
      </div>
    );
  }
}

export default Film;
