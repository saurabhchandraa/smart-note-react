import React, { useState } from 'react';
import VocabularyBuilder from './VocabularyBuilder/VocabularyBuilder';
import NewVocabulary from './VocabularyBuilder/NewVocabulary/NewVocabulary';
import StickyNote from './GeneralNotes/StickyNote';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';

export const Home = () => {

    const DUMMY_WORDS = [
        { id: 0, word: "sequester", meaning: "to set or keep apart from others , cut off, insulate, isolate" },
        { id: 1, word: "travesty", meaning: "a poor, insincere, or insulting imitation of something , caricature, cartoon, farce" }
      ];

    const [words, setWords] = useState(DUMMY_WORDS);

    const addHandler = (wordObject:any) => {
        const wordObjectId = {
            ...wordObject,
            id: Math.random()
        };
        setWords([...words, wordObjectId]);
    }


    return (
      <div>
        {/* <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <NewVocabulary onAddWord={addHandler}></NewVocabulary>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <StickyNote></StickyNote>
            </Card>
          </Grid>
          <Grid item xs={6} md={12}>
            <VocabularyBuilder wordsList={words}></VocabularyBuilder>
          </Grid>
        </Grid> */}
        <NewVocabulary onAddWord={addHandler}></NewVocabulary>
        <VocabularyBuilder wordsList={words}></VocabularyBuilder>
        <StickyNote></StickyNote>
      </div>
    );
}

