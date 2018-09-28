import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text:''}
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
          text:event.target.value
        })
      }
      
      handleSubmit(event){
          event.preventDefault(),
          this.props.receiver(this.state.text)
          this.setState({
           text: ""
          })
      }

    render() { 
        return ( 
            <form className="search" onSubmit={this.handleSubmit}>
                <label className='search--label'>search for a movie:</label>
                <input onChange={this.handleChange} className='search--input' value={this.state.text}/>
                <button className='search--btn'><i className="fas fa-search"></i></button>
            </form>
         );
    }
}
 
export default Search;