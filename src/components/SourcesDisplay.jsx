import React from 'react';
import { fetchSources } from './../actions';
import { connect } from 'react-redux';

class SourcesDisplay extends React.Component {
  constructor(props){
    super(props)
    console.log(props);
    const { dispatch } = props
    console.log(dispatch);
  }

  render(){
    console.log(this.props)
    this.props.dispatch(fetchSources());
    return(
      <div>
        Sources Works
      </div>

    );
  }
}



export default connect()(SourcesDisplay);
