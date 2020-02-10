import React from 'react';
import './HelloWorld.css';

interface IHelloWorldProps {
  text: string;
}

const HelloWorld: React.FC<IHelloWorldProps> = ({ text }) => {
  return (
    <div className="hello">
      <h2>hello world</h2>
      <div>{text}</div>
    </div>
  );
};

export default HelloWorld;
