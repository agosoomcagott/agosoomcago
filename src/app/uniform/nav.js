"use strict";


const nav = () => {

  //! Toggle navigation
  const burger = document.querySelector(".burger");
  const linei = document.querySelector(".linei");
  const lineii = document.querySelector(".lineii");
  const lineiii = document.querySelector(".lineiii");
  const nav = document.querySelector("header");

  burger.addEventListener( "click", () => {
    burger.classList.toggle("burgeri");
    linei.classList.toggle("lineei");
    lineii.classList.toggle("lineeii");
    lineiii.classList.toggle("lineeiii");
    nav.classList.toggle("shownav");
  } );


  //! Active link, on clicking section
  const navList = document.querySelector(".navlist"); // grab the container holding the link items

  navList.addEventListener("click", function(event) { // add a click event listener to the container
    
    if (event.target.tagName === "A") { // ensure the clicked element is a link (<a> tag)
      const currentActive = document.querySelector(".navlink.active");
    
      if (currentActive) { // find the currently active link ....
        currentActive.classList.remove("active"); // .... and remove its "active" class
      }
    
      event.target.classList.add("active"); // add the "active" class to the link that was clicked
    }
    
    burger.classList.remove("burgeri");
    linei.classList.remove("lineei");
    lineii.classList.remove("lineeii");
    lineiii.classList.remove("lineeiii");
    nav.classList.remove("shownav");

  } );
  
  
  //! Active page link
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navlink"); // grab all the navigation links
    const activePage = window.location.href; // get the current page's full URL
  
    navLinks.forEach(navlink => { // loop through each link
      if (navlink.href === activePage) { // check if the link's href matches the current page URL ....
        navlink.classList.add("active"); // .... and add the "active" class to the matching link
      }
    } );
  } );

};

export default nav;