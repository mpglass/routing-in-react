import React from 'react';
import CharacterCard from '../Components/CharacterCard';

class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            name: '',
            id: '',

        };
    }


    async componentDidMount() {
        const res = await fetch("http://ghibliapi.herokuapp.com/people");
        const characters = await res.json();
        this.setState({ characters });
    };

    render() {
        return (
            <>
                {this.state.characters.map((character) => {
                    return < CharacterCard key={`character-card-${character.id}`} character={character} />
                })}
            </>
        );
    }

}
export default Characters;
