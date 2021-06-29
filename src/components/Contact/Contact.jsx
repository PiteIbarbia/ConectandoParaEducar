import React from 'react';
import MenuBar from '../Utilities/MenuBar/MenuBar';
import BodyContact from './BodyContact';
import ContactInfo from './ContactInfo';

export default function Contact () {
    return (
        <main>
            <MenuBar />
            <ContactInfo />
            <BodyContact />
        </main>
    )
}