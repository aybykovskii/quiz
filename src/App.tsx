import React, { useEffect, useState } from "react";

import { Layout, Loader } from "@components";
import { Quiz, QuizCreator } from "@containers";
import { IQuestion } from "@ts";

import { useGlobalStyles } from "./style";
import axios from "axios";
export const App: React.FC = () => {
  const globalStyles = useGlobalStyles();
  const [quiz, setQuiz] = useState<IQuestion[]>([]);

  /* const quiz: IQuestion[] = [
     {
       title: "В каком году основали Санкт-Петербург?",
       answers: [
         { text: "1700", id: 1 },
         { text: "1701", id: 2 },
         { text: "1702", id: 3 },
         { text: "1703", id: 4 },
       ],
      rightAnswerId: 4,
     },
     {
       title: "В каком году основали отменили крепостное право?",
       answers: [
         { text: "1860", id: 1 },
         { text: "1861", id: 2 },
         { text: "1862", id: 3 },
         { text: "1863", id: 4 },
       ],
      rightAnswerId: 2,
     },
   ];
*/
  useEffect(() => {
    axios
      .get(
        "https://quiz-d1337-default-rtdb.europe-west1.firebasedatabase.app/quizes/-M_1J0VqDHe78wmh72d0.json"
      )
      .then((response) => {
        setQuiz(response.data);
      });
  }, []);

  return (
    <Layout>
      {/* {quiz.length === 0 ? <Loader /> : <Quiz quiz={quiz} />} */}
      <QuizCreator />
    </Layout>
  );
};
