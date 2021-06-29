import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BarrioLaCava from "./components/BarrioLaCava/BarrioLaCava";
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import RicardoRojas from './components/RicardoRojas/RicardoRojas';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import SantiagoDelEstero from './components/SantiagoDelEstero/SantagoDelEstero';
import NuestrosValors from './components/NuestrosValores/NestrosValores';

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'> <Home /> </Route>
                <Route path='/QuienesSomos'> <QuienesSomos /></Route>
                <Route path='/NuestrosValores'><NuestrosValors/></Route>
                <Route path='/Proyectos/BlaCava'> <BarrioLaCava /> </Route>
                <Route path='/Proyectos/RicardoRojas'> <RicardoRojas /> </Route>
                <Route path='/Proyectos/SdelEstero'> <SantiagoDelEstero /> </Route>
                <Route path='/Contactanos'> <Contact /></Route>   
            </Switch>
        </BrowserRouter>
    )
}