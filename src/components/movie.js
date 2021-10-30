import React from "react";
import Stars from "./Stars";
import ReviewList from "./Review-List";

// set props and state for Movie List
export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            year: props.year,
            poster: props.poster,
            rating: props.rating,
            genre: props.genre,
            description: props.description
        };
    }
    render() {
        return (
            <div className="card">
                <div className="card-header movie">
                    <span className="title">{this.props.title}</span> {this.props.year}
                </div>
                <div className="card-body">
                    <img src={this.props.poster} alt="Movie Poster" className="container" />{""}
                    <br />
                    <p>
                        <b>{this.props.rating}</b>
                        <br />
                        <b>{this.props.genre}</b>
                        <br />
                        <em>{this.props.description}</em>
                    </p>
                </div>
                <div className="card-footer">
                    <Stars />
                    <br />
                    <ReviewList />
                </div>
            </div>
        );
    }
}