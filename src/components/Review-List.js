import React from "react";
import ReviewForm from "./Review-form";

export default class ReviewList extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header text-black">User Review</div>
        <div className="card-body">
          <ReviewForm />
        </div>
      </div>
    );
  }
}