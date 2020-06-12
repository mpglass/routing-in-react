import React from 'react';
import { Link } from 'react-router-dom';


class CharacterDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: {},
            id: '',
            name: '',
            gender: '',
            age: '',
            eye_color: '',
            hair_color: '',
        };
    }

    async componentDidMount() {
        const res = await fetch(`http://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`);
        const character = await res.json();
        this.setState({ character });
    }

    render() {
        const { name, gender, age, eye_color, hair_color } = this.state.character;

        return (
            <div className="col-12 border p-3 rounded shadow-sm">
                <h2 className="display-2 text-center">{name}</h2>
                <div className="card-body text-center">
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <h2 className="card-text">Gender: {gender}</h2>
                        <h2 className="card-text">Age: {age}</h2>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <h2 className="card-text">Eye Color: {eye_color}</h2>
                        <h2 className="card-text">Hair Color: {hair_color}</h2>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-5">
                        <Link to="/" className=" btn btn-outline-dark btn-lg shadow-sm">Back to Home</Link>
                        <Link to="/characters" className="btn btn-outline-dark btn-lg shadow-sm">Back to Characters</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterDetails; 
