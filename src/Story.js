import React from "react";

class Story extends React.Component {
constructor (props){
  super(props);
  this.url = props.url;
  this.title = props.title;
}

render() {
  return (
    <li>
      <h6><a href={this.url}>{this.title}</a></h6>
    </li>
  )
}
}

export default Story;