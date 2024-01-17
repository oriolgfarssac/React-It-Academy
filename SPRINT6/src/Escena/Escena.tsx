import React from 'react';

interface TextProps {
  content: string;
}

const TextTest: React.FC<TextProps> = (props) => <div>{props.content}</div>;

export { TextTest,};
