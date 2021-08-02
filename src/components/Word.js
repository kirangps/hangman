import React from 'react';

const Word = ({ selectWord, correctLetters }) => {

  return (
    <div className="word">
      {selectWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word