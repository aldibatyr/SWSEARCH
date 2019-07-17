import React from 'react';
import config from '../../config'

export default class Search extends React.Component {
  state={
    name: '',
    characters: []
  }

  handlePopulateCharacters = (input) => {
    fetch(`${config.API_ENDPOINT}/people?search=${input}`)
      .then(res =>{
        if(!res.ok) 
          return res.json().then(e => Promise.reject(e));
        return res.json()
      })
      .then(data => {
        const results = data.results;
        return results
      })  
      .then(results => {
        this.props.getResults(results)
      })
      .catch(error => {
        console.error({error});
      })
    }

  getByName = (e) => {
    e.preventDefault();
    console.log(this.state.name)
    const name = this.state.name;
    return this.handlePopulateCharacters(name)
  }

  saveInput(name){
    this.setState({
      name: name
    })
  }handlePopulateCharacters

  render() {
    return (
      <div className='searchForm'>
        <form className='searchForm-form' onSubmit={this.getByName}>
          <div className='searchForm-header'>
            <h3>Search for characters</h3>
          </div>
          <div className='searchForm-input'>
            <label htmlFor='search'>Input Name</label>
            <input type='text' onChange={e => this.saveInput(e.target.value)} className='search-input' name='search' id='search' />
          </div>
          <div className='controls'>
            <button type='submit' className='searchForm-submit'>
              SEARCH
          </button>
          </div>
        </form>
      </div>
    )
  }
}