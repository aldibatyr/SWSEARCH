import React from 'react';


export default class Results extends React.Component {


  render() {
    return (
      <div className='results'>
        <div>
          <h1>
            Results
          </h1>
        </div>
        <div>
          <p>{this.props.characters[0].name}</p>
        </div>
      </div>
    )
  }
}