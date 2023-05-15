import React from 'react';
import Character from './Character';
import characters from '../characters.json';

const Characters = () => {
    return (
        <div className="characters">
            <div className="characters-grid">
                {characters.map(character => {
                    return (<Character key={character.firstName} {...character} />)
                })}
            </div>
        </div>
    )
}

export default Characters;