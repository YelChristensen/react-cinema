import React from 'react';
import Film from './Film';

class Films extends React.Component {
   
    render() { 
        return (
            <div className="films">
                {
                    this.props.filmArr.map(film => <Film key={film.imdbID} receiver={this.props.receiver} film={film}/>)
                }
            </div>
          );
    }
}
 
export default Films;