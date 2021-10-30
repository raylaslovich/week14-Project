import React from "react";

// create form to write reviews.
export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: " ",
      reviews: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      review: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.resetForm();
  }

  addReview() {
    let reviews = this.state.reviews;
    reviews.push(this.state.review);
    this.setState({
      reviews,
    });
  }

  listReviews() {
    let reviews = this.state.reviews;
    return (
      <ul>
        {reviews.map((value, index) => {
          return (
            <li key={`${index}`} className="review">
              <p>{value}</p>
            </li>
          );
        })}
      </ul>
    );
  }

  resetForm() {
    this.setState({
      value: " ",
    });
  }

 

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
          {this.listReviews()}
          <label>
            <b>Your Review:</b>
          </label>
          <br />
          <textarea
            className="form-control rounded-0"
            rows="3"
            cols="150"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <button
            className="btn"
            type="submit"
            value="Submit"
            onClick={() => this.addReview()}
          >
            Add Review
          </button>
        </form>
      </div>
    );
  }
}