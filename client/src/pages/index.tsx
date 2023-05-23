import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IntroPage } from './IntroPage';
import { PianoPage } from './PianoPage';
import { Avatars } from '../components/Avatars';

export const PagesMap = () => {
  return (
    <Routes>
      <Route path='' element={<IntroPage/>}/>
      <Route path='intro/:step' element={<IntroPage/>}/>
      <Route path='intro/:step/:isSuccess' element={<IntroPage/>}/>
      <Route path='piano' element={<PianoPage/>}>
        <Route path='piano/avatars' element={<Avatars/>} />
      </Route> 
    </Routes>
  )
}
