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
        console.log (characters);
    };

    render() {
        return (
            <>
                {this.state.characters.map((character) => {
                    // return < CharacterCard key={'character-card-${character.id}'} character={character} />
                    return <CharacterCard character={character} />
                })}
            </>
        );
    }

}
export default Characters;

// import React from 'react';
// import FilmsList from '../Components/FilmsList';

// class Films extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             films: [],
//             title: '',
//             id: '',
//         };
//     }


//     async componentDidMount() {
//         const res = await fetch("http://ghibliapi.herokuapp.com/films");
//         const films = await res.json();
//         this.setState({ films });
//         console.log(films)
//     };

//     render() {
//         return (
//             <>
//                 {this.state.films.map((film) => {
//                     return < FilmsList key={`film-card-${film.id}`} film={film} />
//                 })}
//             </>
//         );
//     }

// }
// export default Films;
