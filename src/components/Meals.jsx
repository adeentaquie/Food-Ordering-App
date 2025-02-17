import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
const requestConfig={}

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals",requestConfig,[]);

  console.log(loadedMeals)

  if(isLoading){
    return <p className="center"> Fetching meals............</p>
  }

  if(error){
    return <Error title="failed to fetch meals" message={error}/>
  }

//   if(!data){
//     return <p>no meals found</p>
//   }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
