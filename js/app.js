/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/



let sections = document.querySelectorAll('section');
let ulparent=document.querySelector("#navbar__list");


for(let i=0; i< sections.length; i++){
   // Build navigation:
   let listitem= document.createElement("li");

   // Get label data for every list item:
   let listItemLabel=sections[i].getAttribute("data-nav");
   let z= i+1;

   // Set label data for each list item:
   listitem.innerHTML="<a data-pointer='#section"+z+"'>"+listItemLabel+"</a>";
   listitem.classList.add("menu__link");
   ulparent.appendChild(listitem);

   let sectionContainer= document.querySelector('#section'+z);


   listitem.addEventListener("click",function (){

      // Remove "your-active-class" from all sections and list items first:
      for(let i=0; i< sections.length; i++) {
         sections[i].classList.remove("your-active-class");
      }
      let listItems=document.querySelectorAll(".menu__link");
      for(let i=0; i< listItems.length; i++) {
         listItems[i].classList.remove("activeLitem");
      }

      // Activate selected list item:
      listitem.classList.add("activeLitem");

      // Add "your-active-class" to clicked item only:
      sectionContainer.classList.add("your-active-class");

      // Smooth scroll to the target section:
      sectionContainer.scrollIntoView({behavior:"smooth", block:"center"});
   })
}

/**
 * End Main Functions
 * 
*/







