import React from 'react'
import { useEffect } from 'react';

const Blogs = () => {
    useEffect(() => {
        let articles = document.querySelectorAll(".article");

        articles.forEach(i => {
          i.addEventListener(
            "mousemove",
            e => {
              let mouseX = e.offsetX;
              let mouseY = e.offsetY;
              i.querySelector(".overlay")
                .style.setProperty(
                "background-image",
                `radial-gradient(circle at ${(mouseX) * 100  / -i.offsetWidth+100}% ${(mouseY) * 100  / -i.offsetHeight+100}%,rgba(0,0,0,0.2) 25%,rgba(0,0,0,0.33) 50%)`
              );
              i.style.setProperty("transform", `rotateY(${  ( ( (mouseX*100) / i.offsetWidth - 50 ) / 100) * 2}deg) rotateX(${  ( ( (mouseY*100) / i.offsetHeight - 50 ) / 100) * 2}deg) `
        )
            },
            false
          );
          i.addEventListener("mouseleave",()=>{
            i.style.setProperty("transform",`rotateX(0deg) rotateY(0deg)`);
            
                  i.querySelector(".overlay")
                .style.setProperty(
                "background-image",
                `radial-gradient(circle at 50% 50%,rgba(0,0,0,0.2) 20%,rgba(0,0,0,0.3) 50%)`
              );
          })
        });
        
    
    
    }, [])
    
  return (
   <>
   <div class="wrap">
        <div class="article">
            <div class="overlay"></div>
            <div class="wrap-cat">
                <span class="cat" data-hover="Humans in Space">Humans in Space</span>
            </div>
            <h1>
                <span>Juno Solves 39-Year Old Mystery of Jupiter Lightning</span>
            </h1>
        </div>
        <div class="article">
            <div class="overlay"></div>
            <div class="wrap-cat">
                <span class="cat" data-hover="Moon to Mars">Moon to Mars</span>
            </div>
            <h1>
                <span>Astronomers Spot a Distant and Lonely Neutron Star</span>
            </h1>
        </div>
      <div class="article">
            <div class="overlay"></div>
            <div class="wrap-cat">
                <span class="cat" data-hover="Burst of Energy">Burst of Energy</span>
            </div>
            <h1>
                <span>Solar flares and eruptions can impact radio communications, electric power grids, and navigation signals and pose risks to spacecraft and astronauts.</span>
            </h1>
        </div>
        <div class="article">
            <div class="overlay"></div>
            <div class="wrap-cat">
                <span class="cat" data-hover="Flight">Flight</span>
            </div>
            <h1>
                <span>Astronauts Safely in Orbit Following Launch to International Space Station</span>
            </h1>
        </div>
        <div class="article">
            <div class="overlay"></div>
            <div class="wrap-cat">
                <span class="cat" data-hover="Humans in Space">Humans in Space</span>
            </div>
            <h1>
                <span>NASA to Host Live Discussion on New Mars Science Results</span>
            </h1>
        </div>
        <div class="article">
            <div class="overlay"></div>
            <div class="wrap-cat">
                <span class="cat" data-hover="Moon to Mars">Moon to Mars</span>
            </div>
            <h1>
                <span>NASA Finds Ancient Organic Material, Mysterious Methane on Mars</span>
            </h1>
        </div>
    </div>

   </>
  )
}

export default Blogs