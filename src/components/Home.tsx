import { useState, useEffect, useContext } from "react";
import VocabularyBuilder from "./VocabularyBuilder/VocabularyBuilder";
import NewVocabulary from "./VocabularyBuilder/NewVocabulary/NewVocabulary";
import StickyNote from "./Notepad/StickyNote";
import { getVocabularyData, postVocabulary } from "../services/AppService";
import AuthContext from "../context/auth-context";

interface Words {
  id: number;
  word: string;
  meaning: string;
}
export const Home = () => {

  const ctx = useContext(AuthContext);

  const DUMMY_WORDS = [
    {
      id: 0,
      word: "sequester",
      meaning: "to set or keep apart from others , cut off, insulate, isolate",
    },
    {
      id: 1,
      word: "travesty",
      meaning:
        "a poor, insincere, or insulting imitation of something , caricature, cartoon, farce",
    },
  ];

  const [words, setWords] = useState<Words[]>([]);

  useEffect(() => {
    getVocabulary();
  }, [ctx.isLoggedIn]);

  const getVocabulary = () => {
    if (ctx.isLoggedIn) {
      getVocabularyData().then((response) => {
        console.log(response);
        setWords(response.data);
      });
    } else {
      setWords(DUMMY_WORDS);
    }
  };

  const addHandler = (wordObject: any) => {
    postVocabulary(wordObject.word, wordObject.meaning).then((response) => {
      const wordObjectId = {
        ...wordObject,
        id: response.data.id,
      };
      console.log(wordObjectId);
      setWords([...words, wordObjectId]);
    });
  };

  return (
    <div>
      <NewVocabulary onAddWord={addHandler}></NewVocabulary>
      <VocabularyBuilder
        wordsList={words}
        setVocabularyData={setWords}
      ></VocabularyBuilder>
      <StickyNote></StickyNote>
    </div>
  );
};
