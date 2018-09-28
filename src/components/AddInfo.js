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
                <h4>IMDb rating:{this.state.imdbRating}</h4>
                <h4>cast: {this.state.cast}</h4>
                <h4>awards: {this.state.awards}</h4>
                <h4>director: {this.state.director}</h4>
                <h4>genre: {this.state.genre}</h4>
                <h4>plot: {this.state.plot}</h4>
            </div>
        );
    }
}
 
export default AddInfo;