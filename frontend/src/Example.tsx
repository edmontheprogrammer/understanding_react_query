import { useQuery } from "@tanstack/react-query";
import React from "react";

const Example = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json()
      ),
  });
  if (isPending) return 'Loading...'
  if (error) return 'An error has occured: ' + error.message

  return <div>
    <h1>{data.name}</h1>
    <p>{data.description}</p>
    <strong>{data.subscribers_count}</strong>{' '}
    <strong>{data.stargazers_count}</strong>
    <strong>{data.forks_count}</strong>
  </div>;
};

export default Example;
