import React from 'react';
import Header  from '../Header';
import Footer  from '../Footer';
import './style.css';

const NewPost = () => {
  return (
    <div>
    <Header />
    <button onClick= {() => (window.location.href = "/")}>BACK</button>
    <Footer />
  </div>
  );
}

export default NewPost;