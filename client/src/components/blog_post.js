import React from 'react'

class BlogPost extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){

  }



  render(){
    return(
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="post-title">
            {props.title}
          </h2>
          <p className="post-content"></p>
          <p className="meta-data text-muted">{props.date}</p>
        </div>
      </div>
    );
  };

};

export default BlogPost