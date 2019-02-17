import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import AllCards from '../AllCards';
import Button from '../Button';
// import cardJSON from '../../mockData/index.json';
import './style.css';

const axios = require('axios');

class Main extends Component {
  state = {
    cardJSON: [],
  }

  componentDidMount() {
    return axios.get('https://api.myjson.com/bins/hc5ye')
      .then((jsonObj) => {
        this.setState({cardJSON: jsonObj.data});
        return jsonObj;
      });
  }

  render(){
    return (
      <div>
      <Header />
      <div className="AllCards">
        <AllCards cardsJSON = {this.state.cardJSON}/>
      </div>
      <div className="createPostButton">
        <Button onClick= {() => (window.location.href = "/posts")} />
      </div>
      <Footer />
    </div>
    );
  }
}


export default Main;