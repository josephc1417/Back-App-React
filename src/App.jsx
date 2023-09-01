import React from 'react'
import { navbar } from './components/navbar'
import { hero } from './components/hero'
import { services } from './components/services'
import { about } from './components/about'
import { tours } from './components/tours'
export const App = () => {
  return (
    <>
   <navbar/>
   <hero />
   <about/>
   <services/>
   <tours/>
   <footer/>
    </>
  )
}
