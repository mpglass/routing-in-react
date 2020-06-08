import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {

    componentDidMount() {
        fetch("http://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(json => { this.setState({ films: json }) })
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(json => { this.setState({ characters: json }) })
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={() => <h1>Home Page</h1>} />;
                    <Route exact path="/films" component={() => <h1>Films</h1>} />;
                    <Route exact path="/films/:id" component={() => <h1>Film Details</h1>} />;
                    <Route exact path="/characters" component={() => <h1>Characters</h1>} />;
                    <Route exact path="/characters/:id" component={() => <h1>Character Details</h1>} />;
                    <Route path="*" component={() => <h1>404</h1>} />;
                </Switch>
            </BrowserRouter >
        );
    }
}

export default App;