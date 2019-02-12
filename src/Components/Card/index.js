import React, {Component} from 'react';
import './style.css';
import redHeart from '../../Icons/heart-red.svg';
import blackHeart from '../../Icons/heart-black.svg';

class Card extends Component{
  state = {
    liked: this.props.liked,
    clapCount: this.props.claps,
  };

  incrementClaps = () => {
    return this.setState({
      clapCount: this.state.clapCount+1,
    })
  }

  toggleLike = () => {
    return this.setState({
      liked: !(this.state.liked),
    })
  }

  flipLike = () => {
    if(this.state.liked === true) {
      return redHeart;
    }
    else {
      return blackHeart;
    }
  }
  render(){
    return(
      <div className="cardContainer">
        <section className="art-image">
          <img src={this.props.imageURL} alt="art"/>
        </section>
        <section className="date-time">
          <p>{this.props.date}</p>
          <p>{this.props.readingTime}</p>
        </section>
        <section>
          <p className="art-heading">{this.props.title}</p>
          <p className="art-story">{this.props.description}</p>
        </section>
        <section className="art-reaction">
          <hr/>
          <div className="clap-like">
            <div className="claps">
              <img src = {require('../../Icons/clapping.svg')} alt="clap" onClick={this.incrementClaps}/>
              <span>{this.state.clapCount}</span>
            </div>
            <div className="likes">
              <img src = {this.flipLike()} alt="clap" onClick = {this.toggleLike}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Card;