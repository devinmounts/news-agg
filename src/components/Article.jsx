import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/Article.css';
import Moment from 'moment';
import Image from 'react-graceful-image';
import placeholder from './../assets/images/placeholder.png';

class Article extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      readMoreVisible: false
    };
    this.handleReadMoreVisible = this.handleReadMoreVisible.bind(this);
  }


  handleReadMoreVisible(){
    this.setState({
      readMoreVisible: !this.state.readMoreVisible
    });
  }

  render(){
    const { title, author, date, source, description, url, image} = this.props;
    let sourceDisplay = null;
    let titleDisplay = null;
    let imageDisplay = null;
    if(this.state.readMoreVisible){
      sourceDisplay = <h5 className='read-source'>READ MORE</h5>;
      titleDisplay = <h1 className='read-title'>{title}</h1>;
      imageDisplay = <a href={url}><img className='read-image' onMouseEnter={this.handleReadMoreVisible} onMouseLeave={this.handleReadMoreVisible} className='image' src={image != null ? image : placeholder } /></a>;
    } else {
      sourceDisplay = <h5 className='article-source'>Source: {source}</h5>;
      titleDisplay = <a href={url}><h1>{title}</h1></a>;
      imageDisplay = <a href={url}><img onMouseEnter={this.handleReadMoreVisible} onMouseLeave={this.handleReadMoreVisible} className='image' src={image != null ? image : placeholder } /></a>;
    }

    let dateDisplay = new Moment(date).from(new Moment());
    let authorDisplay = null;
    if(author === null) {
      authorDisplay = 'N/A';
    } else {
      authorDisplay = author;
    }

    return(
      <div className='article-container'>
        {sourceDisplay}
        {imageDisplay}
        {titleDisplay}
        <span>{authorDisplay}</span> - <span>{dateDisplay}</span>
        <p>{description}</p>
      </div>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  source: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  key: PropTypes.string
};
export default connect()(Article);
