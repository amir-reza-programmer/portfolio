import React from "react";
import queryString from "query-string";
const Posts = ({ match, location }) => {
  // for url /posts/2018/06?sortBy=newest&approved=True result
  // would be {approved: 'True', sortBy: 'newest'} wich notice that the value of each attribiute is string
  const result = queryString.parse(location.search);
  console.log(result);
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year} , Month: {match.params.month}
    </div>
  );
};

export default Posts;
