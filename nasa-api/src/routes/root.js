import React from 'react';
import './App.css';
import Header from '../components/Header'
import { Outlet } from 'react-router-dom';

function Root() {

  return (
    <>
      <Header />
      <Outlet />
      
    </>
  );
}

export default Root;
