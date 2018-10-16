import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import './styles/DisplayContainer.css';
import HorizontalScroll from 'react-scroll-horizontal';

class DisplayContainer extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const { articlesObject } = this.props

    let articles = [];
    if(articlesObject.articles != undefined && !articlesObject.articles.length < 1 ){
      articles = Object.keys(this.props.articlesObject.articles).map((articleId) => {
        let article = this.props.articlesObject.articles[articleId];
        return <Article
          title = {article.title}
          author = {article.author}
          date = {article.publishedAt}
          source = {article.source.name}
          description = {article.description}
          url = {article.url}
          image = {article.urlToImage}
          key = {articleId}
          className='child'/>;
      });
    } else {
    }
    console.log(articles);
    return (
      <div className='display-container'>
        <HorizontalScroll>
          {articles}
        </HorizontalScroll>
      </div>
    );
  }
}

DisplayContainer.propTypes = {
  articlesObject: PropTypes.object,
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  source: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default DisplayContainer;
