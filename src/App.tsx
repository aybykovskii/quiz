import React from "react";

import { Layout } from "@components";
import { Quiz, QuizCreator } from "@containers";

import { useGlobalStyles } from "./style";

import { Switch, Route } from "react-router-dom";
import { QuizList } from "@containers/QuizList/QuizList";

export const App: React.FC = () => {
  const globalStyles = useGlobalStyles();

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={QuizList} />
        <Route path="/quiz_creator" component={QuizCreator}></Route>
        <Route path="/:id" component={Quiz} />
      </Switch>
    </Layout>
  );
};
