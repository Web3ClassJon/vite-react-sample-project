import React from 'react'
import MainLayout from '../MainLayout'
import SportsHome from './SportsHome'
import Tennis from './Tennis'
import Basketball from './Basketball'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'


const SportsPage = () => {
  return (
    <MainLayout>
        <h1>Sports</h1>

        <NavLink to="/sports">Sports</ NavLink>
        {" "}
        <NavLink to="/sports/tennis">Tennis</ NavLink>
        {" "}
        <NavLink to="/sports/basketball">Basketball</ NavLink>

        <Routes>
           <Route index element={<SportsHome />} /> 
           <Route path="tennis" element={<Tennis />} /> 
           <Route path="basketball" element={<Basketball />} /> 
        </Routes>
        <Outlet />
    </MainLayout>
  )
}

export default SportsPage