import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Search from './components/search/Search';
import Results from './components/results/Results';



class App extends React.Component {
  state = {
    characters: []
  }

  setCharacters = (characters) => {
    this.setState({
      characters: characters
    })
    console.log(this.state.characters)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>SWSEARCH</h1>
        </header>
        <main className='main-app'>
          <BrowserRouter>
            <Switch>
              <Route path='/' render={
                () => {
                  return <Search getResults={this.setCharacters}/>
                }
              }/>
              <Route path='/results' render={
                () => {
                  return <Results/>
                }
              }/>
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
