// 3a. 
import {useState} from 'react';

// 3b. 
function Bonus() {
    // 3d. 
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // THIS IS THE ANSWER
    // 3h.
    const [letterCount, setLetterCount] = useState(0);

    // 3e.
    return(
        <div>
            <h1>{letters[letterCount]}</h1>
            <button onClick={() => (letterCount === letters.length - 1) ? setLetterCount(0) : setLetterCount(letterCount + 1)}>NEXT LETTER</button>
            {/* or */}
            {/* <button onClick={() => (letterCount < letters.length - 1) ? setLetterCount(nextLetter + 1) : setLetterCount(0)}>NEXT LETTER</button> */}
            {/* OR */}
            {/* <button onClick={() => setLetterCount(letterCount + 1)}>NEXT LETTER</button> */}
        </div>
    )


    // https://www.youtube.com/watch?v=RZ5wKYbOM_I

    // 3h. 
    // https://stackoverflow.com/questions/70627086/react-how-to-display-random-string-from-array-and-choose-another-random-on-btn
    // random letter
    /*
    const randomLetter = () => {
        return letters[Math.floor(Math.random() * letters.length)];
    }
    const [item, setItem] = useState(randomLetter())

    const next = () => {
        const letter = randomLetter();
        setItem(letter);
    }  
   
    return (
            // 3e. 
        <div>
            <h1>{item}</h1>
            <button onClick={next}>NEXT LETTER</button>
        </div>
    )
    */

    
    // disappear letter
    /*
    const [item, setItem] = useState(letters)

    const next = () => {
        return setItem(item.slice(1))
    }  
   
    return (
            // 3e. 
        <div>
            <h1>{item}</h1>
            <button onClick={next}>NEXT LETTER</button>
        </div>
    )
    */

}

// 3c. 
export default Bonus;

