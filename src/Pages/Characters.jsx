import React from 'react';
import CharacterDetails from '../Components/CharacterDetails';

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
        console.log (characters);
    };

    render() {
        return (
            <>
                {this.state.characters.map((character) => {
                    // return < FilmDetails key={'film-card-${film.id}'} film={film} />
                    return <CharacterDetails character={character} />
                })}
            </>
        );
    }

}
export default Characters;