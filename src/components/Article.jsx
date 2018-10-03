import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCurrentSourceUrl } from './../actions';
import './styles/Article.css';

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
    const { title, author, date, source, description, url, image, dispatch } = this.props;
    let sourceDisplay = null;
    let titleDisplay = null;
    let imageDisplay = null;
    if(this.state.readMoreVisible){
      sourceDisplay = <h5 className='read-source'>READ MORE</h5>;
      titleDisplay = <h1 className='read-title'>{title}</h1>;
      imageDisplay = <a href={url}><img className='read-image' onMouseEnter={this.handleReadMoreVisible} onMouseLeave={this.handleReadMoreVisible} className='image' src={image} /></a>;
    } else {
      sourceDisplay = <h5 className='article-source'>Source: {source}</h5>;
      titleDisplay = <a href={url}><h1>{title}</h1></a>;
      imageDisplay = <a href={url}><img onMouseEnter={this.handleReadMoreVisible} onMouseLeave={this.handleReadMoreVisible} className='image' src={image} /></a>;


    }

    return(
      <div className='article-container'>
        {sourceDisplay}
        {imageDisplay}
        {titleDisplay}
        <span>{author}</span> - <span>{date}</span>
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
