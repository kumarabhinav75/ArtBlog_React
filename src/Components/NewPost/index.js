import Header  from '../Header';
import Footer  from '../Footer';
import './style.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'axios';
import axios from 'axios';

class NewPost extends Component {

  state = {
    date:{},
    readTime: '',
    title: '',
    message: '',
    serverResponse: '',
  }

  handleDateChange = (e) => {
    this.setState({
      date: e.target.value,
    })
  }
  handleReadTimeChange = (e) => {
    this.setState({
      readTime: e.target.value,
    })
  }
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    })
  }
  handleMsgChange = (e) => {
    this.setState({
      message: e.target.value,
    })
  }

  postForm = (event) => {
    event.preventDefault();
    const STATE = this.state;
    axios.post('http://localhost:8881/formdata', STATE).then(val => console.log(val));
  }
  render() {
    return (
      <div className="body">
        <Header />
        <form className="form-width" onSubmit={this.postForm}>
        {/* <form className="form-width"> */}
          <ul className="flex-outer">
            <li>
              <label >Date</label>
              <input type="date"  name = "date" onChange = {this.handleDateChange}/>
            </li>
            <li>
              <label >Read Time</label>
              <input type="text" name="read-time" placeholder="Enter the read time for blog" onChange = {this.handleReadTimeChange} />
            </li>
            <li>
              <label >Title</label>
              <input type="text" name="title" placeholder="Enter the Title of Post" onChange = {this.handleTitleChange} />
            </li>
            <li>
              <label >Message</label>
              <textarea rows="6"  name="message" placeholder="Enter your message here" onChange = {this.handleMsgChange}></textarea>
            </li>
            <li>
                <button type="submit">Submit</button>
            </li>
          </ul>
        </form>
        <Footer />
      </div>

    );
  }
};

export default NewPost;