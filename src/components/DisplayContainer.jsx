import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import './styles/DisplayContainer.css';

class DisplayContainer extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const { articlesObject } = this.props

    let articles = null;
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
          key = {articleId} />;
      });
    } else {
      articles = <h1>No articles matched your search</h1>;
    }


    return (
      <div className='display-container'>
        {articles !=null ? articles : ''}
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
