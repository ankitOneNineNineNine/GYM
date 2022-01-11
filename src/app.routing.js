import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Navbar from './components/Navbar/main.component';
import Nav1 from './components/Navbar/nav1.component';
import Bio from './pages/Bio';
import Coaching from './pages/coaching';
import Home from './pages/Home'
import Plans from './pages/plans';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Books from './pages/Books'
import Profile from './pages/profile';
import Dashboard from './pages/dashboard';


const FormRoute = ({ children }) => {
    return (
        <>
            <Nav1 />
            {children}
        </>
    )
}

const NavRoute = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default function AppRouting() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<NavRoute><Home /></NavRoute>} />
                <Route path='/bio' element={<NavRoute><Bio /></NavRoute>} />
                <Route path='/coaching' element={<NavRoute><Coaching /></NavRoute>} />
                <Route path='/coaching/plans' element={<NavRoute><Plans /></NavRoute>} />
                <Route path='/books' element={<NavRoute><Books /></NavRoute>} />
                <Route path='/profile' element={<NavRoute><Profile /></NavRoute>} />
                <Route exact path='/dashboard' element={<NavRoute><Dashboard /></NavRoute>} />
                <Route path='/dashboard/:nav' element={<NavRoute><Dashboard /></NavRoute>} />
                <Route path='/signin' element={<FormRoute><Signin /></FormRoute>} />
                <Route path='/signup' element={<FormRoute><Signup /></FormRoute>} />
            </Routes>
        </Router>
    )
}