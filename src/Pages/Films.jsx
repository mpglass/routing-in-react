import React from 'react';
import FilmDetails from '../Components/FilmDetails';

class Films extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            title: '',
            id: '',
        };
    }


    async componentDidMount() {
        const res = await fetch("http://ghibliapi.herokuapp.com/films");
        const films = await res.json();
        this.setState({ films });
    };

    render() {
        return (
            <>
                {this.state.films.map((film) => {
                    return < FilmDetails key={`film-card-${film.id}`} film={film} />
                    // return <FilmDetails film={film} />
                })}
            </>
        );
    }

}
export default Films;
