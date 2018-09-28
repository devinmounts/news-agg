import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import './styles/DisplayContainer.css';

class DisplayContainer extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    console.log(this.props)
    let articles = null;

    if (this.props.articlesObject.articles != undefined){
      articles = Object.keys(this.props.articlesObject.articles).map((articleId) => {
        let article = this.props.articlesObject.articles[articleId];
        return <Article
          title = {article.title}
          author = {article.author}
          source = {article.source.name}
          description = {article.description}
          url = {article.url}
          image = {article.urlToImage}
          key = {articleId} />
      });
    }
    return (
      <div className='display-container'>
        Container Works
        {articles !=null ? articles : ''}
      </div>
    );
  }
}

export default DisplayContainer;