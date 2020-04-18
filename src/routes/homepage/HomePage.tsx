import React, { useEffect, useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import { ConnectedProps } from '@sf/ffr-core';
import Button from '@sf/ffr-components/es/button';
import HelloWorld from '../../components/hello-world';
import { TGlobalState } from '../types';

const connector = connect(({ home }: TGlobalState) => ({ home }));

type PropsFromState = ConnectedProps<typeof connector>;

const HomePage: React.FC<PropsFromState> = ({ home, dispatch }) => {
  const countContainer = useRef(0);

  useEffect(() => {
    dispatch({ type: 'home/getText' });
  }, []);

  const handleClick = useCallback(() => {
    dispatch({ type: 'home/updateCount', payload: countContainer.current }).catch(e => {
      console.error(e);
    });
  }, []);
  const { payload, count } = home;
  countContainer.current = count;

  return (
    <>
      <HelloWorld text={payload} />
      <div style={{ marginLeft: 48 }}>
        <Button onClick={handleClick} glyph="sys-add">
          See you again
        </Button>
        <div>{`see you ${countContainer.current} times`}</div>
      </div>
    </>
  );
};

export default connector(HomePage);
