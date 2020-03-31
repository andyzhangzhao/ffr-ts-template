import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListGroup, { ListItem } from '@sf/ffr-components/es/list-group';

import { TGlobalState } from '../types';

// const connector = connect(({ detail }: TGlobalState) => ({ detail }));

// type PropsFromState = ConnectedProps<typeof connector>;

const DetailPage: React.FC = () => {
  const dispatch = useDispatch();
  const detailText = useSelector(({ detail }: TGlobalState) => detail);
  useEffect(() => {
    dispatch({ type: 'detail/getDetail' });
  }, []);

  const { text = [] } = detailText;

  return (
    <div style={{ marginLeft: 48 }}>
      <h2>How to learn Fori for Reaact</h2>
      <ListGroup>
        {text.map((tt, inx) => {
          // eslint-disable-next-line react/no-array-index-key
          return <ListItem key={inx + 1}>{tt}</ListItem>;
        })}
      </ListGroup>
    </div>
  );
};

export default DetailPage;
