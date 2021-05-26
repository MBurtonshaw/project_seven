import { React, Component } from "react";
import Pic from "./Pic";

class Results extends Component {
  componentDidMount() {
    
  }
  render() {
    const results = this.props.data;
    let list = results.map(pic => <Pic title={ pic.title } src={ `https://live.staticflickr.com/${ pic.server }/${ pic.id }_${ pic.secret }_w.jpg` } key={ pic.id }/>);
    return(
      <div className="home-container">
        <div className="photo-container">
        <h2> {
            this.props.query
          } pics </h2>
          <ul>
            { list }
          </ul>
        </div>
      </div>
    );
  }
}

export default Results;