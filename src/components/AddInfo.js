import React from 'react';

class AddInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            imdbRating:'',
            cast:'',
            awards:'',
            director:'',
            genre:'',
            plot:''
        }

        this.fetchAddInfo= this.fetchAddInfo.bind(this)
    }
    componentDidMount(){
        this.fetchAddInfo();
    }

    fetchAddInfo(){
        fetch(`https://www.omdbapi.com/?apikey=b749b385&i=${this.props.imdbID}`)
        .then(response=>response.json())
        .then(body=> this.setState({
            imdbRating: body.imdbRating,
            cast: body.Actors,
            awards: body.Awards,
            director:body.Director,
            genre:body.Genre,
            plot:body.Plot
        }))
    }

    render() { 
        return (
            <div>
                <p><b>IMDb rating:</b> {this.state.imdbRating}</p>
                <p><b>cast:</b> {this.state.cast}</p>
                <p><b>awards:</b> {this.state.awards}</p>
                <p><b>director:</b> {this.state.director}</p>
                <p><b>genre:</b> {this.state.genre}</p>
                <p><b>plot:</b> {this.state.plot}</p>
            </div>
        );
    }
}
 
export default AddInfo;