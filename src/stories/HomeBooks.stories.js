import React from "react";

import HomeBooks from '../Components/HomeBooks/HomeBooks'


export default {
    title: "Home Books",
    component: HomeBooks,

    // parameters: {
    //     info: {
    //         // Make a default for all stories in this book,
    //         inline: true, // where the components are inlined
    //         source: false,
    //     },
    // },
};



export const all = () => <HomeBooks />;

// Tostorybook.story ={name:'learning'};

