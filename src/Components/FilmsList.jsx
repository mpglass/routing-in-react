import React from 'react';
import { Link } from 'react-router-dom';

const FilmsList = ({ film }) => {
console.log(film.id)
    return (
        <div className="col-md-6">
            <Link to={`/films/filmpage/${film.id}`}>
                <div className="card my-2 shadow">
                    <div className="card-body text-center">
                        <h4 className="card-title">{film.title}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default FilmsList;

