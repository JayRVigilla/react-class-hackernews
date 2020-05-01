import React from "react";
import Story from "./Story";
import axios from "axios";
import SearchForm from "./SearchForm";
import { v4 as uuid } from "uuid";

class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.term = "react";
    this.API_URL = `https://hn.algolia.com/api/v1/search?query=`;
    this.searchStories = this.searchStories.bind(this);
    this.state = {
      stories: [],
      term: this.term,
    };
  }

  // TODO do we need term in state? how're we getting it from FORM?
  // state = {
  //   stories: [],
  //   term: this.term,
  // };

  async componentDidMount() {
    const storiesList = await axios.get(`${this.API_URL}${this.term}`);
    console.log(`\n\n\n The value of storiesList is `, storiesList);
    this.setState({ stories: storiesList.data.hits, term: "react" });
  }

  async searchStories(query) {
    // console.log("this.API_URL is", this.API_URL);
    const searchedStories = await axios.get(`${this.API_URL}${query}`);
    // const searchedStories = await axios.get(
    //   `https://hn.algolia.com/api/v1/search?query=${query}`
    // );
    console.log("stories is", searchedStories.data.hits);
    this.setState({ stories: searchedStories.data.hits, term: query });
  }

  render() {
    return (
      <div>
        <SearchForm searchStories={this.searchStories} />
        {console.log(`\n\n\n The value of this.state is `, this.state)}
        {this.state.stories.map((story) => (
          <Story key={uuid()} title={story.title} url={story.url} />
        ))}
      </div>
    );
  }
}

export default StoryList;
