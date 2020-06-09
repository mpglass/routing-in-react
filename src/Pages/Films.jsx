import React from 'react';

class Films extends React.Component {

    state = {
        films: [],
        title: '',
        id: '',

    };
async componentDidMount(){
    const res = await fetch("http://ghibliapi.herokuapp.com/films");
    const films = await res.json();
    this.setState({ films });
};

render() {
    return(
        <h1>Films page!!</h1>
    );
}

}

export default Films;
