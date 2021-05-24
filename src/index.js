import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = {lat: null, errorMessage:''}
  

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position=> this.setState({lat:position.coords.latitude}),
      err => this.setState({errorMessage:err.message})
    );
  }
  
  render(){
    if (!this.state.lat && this.state.errorMessage) {
      return (<div className="">Error: {this.state.errorMessage}</div>);
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay Latitud={this.state.lat}/>
    }
    return (<div className="">Loading</div>);
  }
}

ReactDOM.render(<App />,
  document.getElementById('root')
);
