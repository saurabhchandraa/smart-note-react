import React, {useState, useEffect} from 'react';
import './NewVocabulary.css';
import axios from 'axios';

const VocabularyBuilder = (props:any) => {
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');
    const[baseURL, setBaseURL] = useState('');

    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        getMeaningFromWebster(baseURL);
        console.log(`Effect Call: ${baseURL}`);
      }, 500)
      return () => clearTimeout(delayDebounceFn)
    }, [baseURL])

 
    const wordChangeHandler = (event:any) => {
      setWord(event.target.value);
      setBaseURL(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${event.target.value}`);
    }

    const getMeaningFromWebster =async (baseURL:string) => {
      try {
        const res = await axios.get(baseURL, {
          params: {
            key: '38de0b0f-06a2-47ed-8987-4afa5a3ad3d1'
          }
        });
        console.log('Webster Call');
        const result = res.data[0].def[0].sseq[0][0][1].dt[0][1]; // shortdef
        const defResult = result.replace(/{bc}|{it}|a_link|d_link|sx/gi, "").replace(/[^a-zA-Z0-9(*), ]/gi, "");
        const syn1 = res.data[0].def[0].sseq[0][0][1].syn_list[0][0].wd;
        const syn2 = res.data[0].def[0].sseq[0][0][1].syn_list[0][1].wd;
        const syn3 = res.data[0].def[0].sseq[0][0][1].syn_list[0][2].wd;
        const output = `${defResult}, ${syn1}, ${syn2}, ${syn3}`
        setMeaning(output);
      }
      catch (error) {
        setMeaning('');
      }
    }

    const meaningChangeHandler = (event:any) => {
        setMeaning(event.target.value);   
        console.log("Meaning Handler");
        console.log(event.target.value);
    }

    const submitHandler = (event:any) => {
      event.preventDefault();
      if(word.trim().length === 0 || meaning.trim().length ===0) {
        return;
      }
      const wordObject = {
        word: word,
        meaning: meaning
    }

    props.onAddWord(wordObject);
    console.log(wordObject);
    setWord('');
    setMeaning('');
    }

    return (
        <form className='new-expense' onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Enter a Word</label>
            <input
              type='text'
              value={word}
              onChange={wordChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Meaning</label>
            <input
              type='text'
              value={meaning}
              onChange={meaningChangeHandler}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add to your note</button>
        </div>
      </form>
    );
};

export default VocabularyBuilder;