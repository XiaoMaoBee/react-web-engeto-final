import './SentenceChanger.css';
import sentences from '../sentences';
import { useState, useEffect} from 'react';

const SentenceChanger = () => {

    const [sentence, setSentence] = useState(null)

    const changeSentence = () => {

        let randomNum = Math.floor((Math.random() * 4) );
        setSentence(sentences[randomNum].sentence)
    }


    useEffect( () => {      
        changeSentence();
    }, [])

    return <div className='sentence-box'>
        <p>{sentence}</p>
    </div>
}

export default SentenceChanger;