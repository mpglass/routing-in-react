import React from 'react';

class FilmsList extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            film: {}
        };
    }

    async componentDidMount() {
        console.log(film)
    }

    render() {
        return (
            <div className="col-12">
                <h2 className="display-2">Title</h2>
                <button>Back to Films</button>
                <button>Back to Home</button>
            </div>
        )
    }
}

export default FilmPage; 