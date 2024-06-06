import Example from "./Example";

/*

  Notes on the Core Functionalities of React Query: 
  
   * Note 1: Using React Query: 
      In order to use React Query you need two things: "QueryClientProvider" and 
        "QueryClient". "QueryClientProvider" is a wrapper around the component 
        where you want to use the React Query. "QueryClient" is the actual object  
        or client that interacts with your data or system.  
        A. import { QueryClientProvider, QueryClient } from "@tanstack/react-query"; 
  
  * Note 2: The main two things you can do with React Query is that you can do a  
      "Query" and "Mutation"
      A. Define Query: A Query is just getting data from somewhere like an API.
        For example, getting a list of "POST" request is a query
      B. Define Mutation: A Mutation is changing some type of data. 
        For example, creating a new "POST" request will be a mutation. 


  * Note 3: Post Query Steps: 
        * Step 1: Create a post query object that will get the data
        * Step 2: Write two if statments that will account for the "isLoading" and 
          "isError" states
        * Step 3: Write a return statment that will get the actual data from 
          the data source such as Django's APIs backend. 





*/

import React from "react";

const App = () => {
  return (
    <>
      <Example />
    </>
  );
};

export default App;
