"use strict";


//! get and display current year
export const presentYear = () => {
    const curYear = document.getElementById("currentyear");
    curYear.innerHTML = new Date().getFullYear();
};