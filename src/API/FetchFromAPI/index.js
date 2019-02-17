import React, {Component} from 'react';
const axios = require('axios');

class FetchFromAPI extends Component{
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/hc5ye')
      .then((dataJSON) => {
        this.setState({
          data: dataJSON.data,
        }); 
      });
  }
  render() {
    return (
      <div>{this.state.data}</div>
    );
  }
}

export default FetchFromAPI;