import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { Loader } from "@components";
import { IResponse } from "@ts";

import axios from "@axios/axios-quiz";

export const QuizList: React.FC = () => {
  const [quizes, setQuizes] = useState<IResponse[]>([]);

  useEffect(() => {
    axios.get(`/quizes/.json`).then((response) => {
      Object.keys(response.data).forEach((key: string, index: number) => {
        setQuizes((prev) => [
          ...prev,
          {
            id: key,
            name: `Тест №${index + 1}`,
          },
        ]);
      });
    });
  }, []);

  return quizes == [] ? (
    <Loader />
  ) : (
    <>
      {quizes.map((element, index) => {
        return (
          <NavLink key={index} to={`/${element.id}`}>
            {element.name}
          </NavLink>
        );
      })}
    </>
  );
};
