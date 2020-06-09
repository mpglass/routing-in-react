import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="card col-12 shadow">
            <h1 className="text-center text-dark display-4">Welcome to my Studio Ghibli Page</h1>
            <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="Ghibli Logo" />
            <p className="card-text row lead justify-content-center">Click the links below to display more information.</p>
            <div className="card-body row justify-content-around align-items-center">
                <Link className="btn btn-outline-dark btn-lg" to="/Films">Load Films</Link>
                <Link className="btn btn-outline-dark btn-lg" to="/Characters">Load Characters</Link>
            </div>
        </div>
    )
}
export default Home;