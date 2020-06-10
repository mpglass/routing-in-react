import React from 'react';

const CharacterDetails = (props) => {
    return (
        <section className="container">
                <div className="row justify-content-center">
                    <div className="col-5 d-inline-flex justify-content-center m-2 shadow">{props.character.name}</div>
                    </div>
            </section>
    );
}

export default CharacterDetails; 