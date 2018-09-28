import React from "react";
import Film from "./Film";

class Films extends React.Component {
  constructor() {
    super();
    this.state = {
      activeFilmID: ""
    };

    this.receiveFilm = this.receiveFilm.bind(this);
  }

  receiveFilm(film) {
    this.setState({
      activeFilmID: film.imdbID
    });
  }

  render() {
    return (
      <div className="films">
        {this.props.filmArr.map(film => (
          <Film
            key={film.imdbID}
            makeFilmActive={this.receiveFilm}
            film={film}
            active={film.imdbID === this.state.activeFilmID}
          />
        ))}
      </div>
    );
  }
}

export default Films;
