import React from 'react';

const Content = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.desc}
    </article>
  );
};

export default Content;