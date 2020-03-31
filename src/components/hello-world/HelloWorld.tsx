import React from 'react';
import './HelloWorld.css';

interface IHelloWorldProps {
  text: string;
}

const HelloWorld: React.FC<IHelloWorldProps> = ({ text }) => {
  return (
    <div className="hello">
      <h2>{text}</h2>
      <div>welcome to try Fiori for React</div>
    </div>
  );
};

export default HelloWorld;
