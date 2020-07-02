import React, { useContext } from 'react';
import Ambeer from '../context';

const Menu = () => {
  const { login } = useContext(Ambeer);
  const actualRoute = window.location.href;
  return (
    <div>
      <p>{login}</p>
      <p>{actualRoute}</p>
    </div>
  );
};

export default Menu;
