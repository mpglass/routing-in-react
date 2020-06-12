import React from 'react';
import { Link } from 'react-router-dom';


class FilmPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            film: {},
            title: '',
            id: '',
            description: '',
            director: '',
            producer: '',
            release_date: '',
            url: '',
        };
    }

    async componentDidMount() {
        const res = await fetch(`http://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`);
        const film = await res.json();
        this.setState({ film });
    }

    render() {
        const { title, description, director, producer, release_date } = this.state.film;

        return (
            <div className="col-12 border p-3 rounded shadow-sm">
                <h2 className="display-2 text-center">{title}</h2>
                <div className="card-body text-center">
                    <h6 className="card-text">{description}</h6>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <h4 className="card-text">Director: {director}</h4>
                        <h4 className="card-text">Producer: {producer}</h4>
                    </div>
                    <h5 className="card-text mt-2">Release Date: {release_date}</h5>
                    <div className="d-flex justify-content-between align-items-center mt-5">
                        <Link to="/" className=" btn btn-outline-dark btn-lg shadow-sm">Back to Home</Link>
                        <Link to="/films" className="btn btn-outline-dark btn-lg shadow-sm">Back to Films</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilmPage; 