import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Films from './Pages/Films';
import Characters from './Pages/Characters';
import FilmPage from './Pages/FilmPage';
import CharacterDetails from './Pages/CharacterDetails';


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <nav className="nav justify-content-center p-3 shadow">
                    <h6>Michelle's Studio Ghibli Page</h6>
                </nav>
                <main className="container">
                    <section className="row mt-3 justify-content-center">
                        <Switch>
                            <Route exact path="/" component={Home} />;
                            <Route exact path="/films" component={Films} />;
                            <Route exact path="/films/filmpage/:id" component={FilmPage} />;
                            <Route exact path="/characters" component={Characters} />;
                            <Route exact path="/characters/characterdetails/:id" component={CharacterDetails} />;
                            <Route path="*" component={() => <h1>404</h1>} />;
                </Switch>
                    </section>
                </main>

            </BrowserRouter >
        );
    }
}

export default App;

