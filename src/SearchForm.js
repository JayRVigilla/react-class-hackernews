import React from "react"


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);;
    this.searchStories = props.searchStories;
  }


  state = {
    formData: {
      term: ''
    }
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      formData: {
        [name]: value
      }
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.searchStories(this.state.formData.term);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="term"
          >Enter Search</label>

          <input type="text"
          name="term"
          placeholder=""
          onChange={this.handleChange}
          ></input>
<button>Submit</button>
        </form>
      </div>
    )
  }



}

export default SearchForm;