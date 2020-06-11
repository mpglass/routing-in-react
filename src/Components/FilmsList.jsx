import React from 'react';
import { Link } from 'react-router-dom';

const FilmDetails = ({ film }) => {
    console.log(film);
    return (
        <div className="col-md-6">
            <Link to={`/films/{film.id}`}>
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

