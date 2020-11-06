import React from 'react';
import { Card } from 'antd';

import './UserCard.css';

export interface Props {
  title: string;
  list: Array<{
    key: string;
    value: string;
  }>;
}

export const UserCard = ({ title, list }: Props) => {
  return (
    <Card title={title} className="mfd-key-val-card">
      {list.map(({ key, value }) => (
        <div key={key} className="mfd-key-val-card-row">
          {key}
          :&nbsp;
          {value}
        </div>
      ))}
    </Card>
  );
};
