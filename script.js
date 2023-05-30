// --------THIS FUNCTION IS FOR LOCOMOTIVE AND SCROLL TRIGGER TO WORK TOGETHER AS THEY BOTH DONT WORK TOGETHER----------

function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  multiplier:0.4,
    lerp:0.09,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




}

locoscroll();


var tone=gsap.timeline()

tone.to(".loader>svg",{
  scale:8,
  duration:1.5,
  filter:"blur(0px)",
})



tone.to(".loader",{
  y:'-100%',
  duration:0.4,
  delay:2,
  
})


















tone.from(".nav",{
         
  y:-500,
  duration:0.7,
},"lol")

tone.from(".pageoneoverlay>svg",{
 
  y:-500,
  duration:0.6,
},"lol")


tone.from(".pageoneoverlay>.overflow>h1",{
 
  y:500,
  duration:0.9,
  rotate:5,
  delay:-0.5,
  
  
})










gsap.to(".img",{

  y:-150,
  rotate:15,
  scrollTrigger:{
    
    trigger:".img",
    scroller:".main",
    start:"top 65%",
    end:"top -50%",
    scrub:1,
  // markers:true,
}




})


gsap.from(".pagethree>.left>.blub",{

  width:"0%",
  height:"0%",
  scrollTrigger:{
    
    trigger:".pagethree>.left>.blub",
    scroller:".main",
    start:"top 90%",
    end:"top 90%",
    
    
    
    
    
  // markers:true,
}




})











gsap.to(".pagefourimg",{

  y:-150,
  rotate:0,
  scrollTrigger:{
    
    trigger:".pagefourimg",
    scroller:".main",
    start:"top 65%",
    end:"top -50%",
    scrub:1,
  // markers:true,
  }
  
  
  
  })


  gsap.from(".pagefour>.left>.blub",{

    width:"0%",
    height:"0%",
    scrollTrigger:{
      
      trigger:".pagefour>.left>.blub",
      scroller:".main",
      start:"top 95%",
      end:"top 95%",
      duration:0.1,
      ease: "expo.out",
      
      
    //  markers:true,
  }
  
  
  
  
  })





  gsap.to(".pagefiveimg",{

    y:-150,
    rotate:0,
    scrollTrigger:{
      
      trigger:".pagefiveimg",
      scroller:".main",
      start:"top 65%",
      end:"top -50%",
      scrub:1,
    // markers:true,
    }
    
    
    
    })
  
  
    gsap.from(".pagefive>.left>.blub",{
  
      width:"0%",
      height:"0%",
      scrollTrigger:{
        
        trigger:".pagefive>.left>.blub",
        scroller:".main",
        start:"top 95%",
        end:"top 95%",
        duration:0.1,
        ease: "expo.out",
        
        
      //  markers:true,
    }
    
    
    
    
    })
  
  
  
  


    gsap.to(".pagesiximg",{

      y:-150,
      rotate:0,
      scrollTrigger:{
        
        trigger:".pagesiximg",
        scroller:".main",
        start:"top 65%",
        end:"top -50%",
        scrub:1,
      // markers:true,
      }
      
      
      
      })
    
    
      gsap.from(".pagesix>.left>.blub",{
    
        width:"0%",
        height:"0%",
        scrollTrigger:{
          
          trigger:".pagesix>.left>.blub",
          scroller:".main",
          start:"top 95%",
          end:"top 95%",
          duration:0.1,
          ease: "expo.out",
          
          
        //  markers:true,
      }
      
      
      
      
      })
    
    
    
    


      gsap.to(".pagesevenimg",{

        y:-150,
        rotate:0,
        scrollTrigger:{
          
          trigger:".pagesevenimg",
          scroller:".main",
          start:"top 65%",
          end:"top -50%",
          scrub:1,
        // markers:true,
        }
        
        
        
        })
      
      
        gsap.from(".pageseven>.left>.blub",{
      
          width:"0%",
          height:"0%",
          scrollTrigger:{
            
            trigger:".pageseven>.left>.blub",
            scroller:".main",
            start:"top 95%",
            end:"top 95%",
            duration:0.1,
            ease: "expo.out",
            
            
          //  markers:true,
        }
        
        
        
        
        })
      

        


 
  


    
  
  
  

      

      

        var blub= document.querySelector('.left>.blub');
        

        blub.addEventListener("mouseenter",function(){
             

          blub.style.width="44.27vw"
          
          blub.style.height="91.49vh"
          
        })

        blub.addEventListener("mouseleave",function(){
       
          blub.style.width="41vw"
          
          blub.style.height="86vh"
         
        })






        var blubtwo= document.querySelector('.pagefour>.left>.blub');
        

       blubtwo.addEventListener("mouseenter",function(){
             

         blubtwo.style.width="44.27vw"
          
         blubtwo.style.height="91.49vh"
          
        })

       blubtwo.addEventListener("mouseleave",function(){
       
         blubtwo.style.width="41vw"
          
         blubtwo.style.height="86vh"
         
        })






        var blubfive= document.querySelector('.pagefive>.left>.blub');
        

        blubfive.addEventListener("mouseenter",function(){
             

          blubfive.style.width="44.27vw"
          
          blubfive.style.height="91.49vh"
          
        })

        blubfive.addEventListener("mouseleave",function(){
       
          blubfive.style.width="41vw"
          
          blubfive.style.height="86vh"
         
        })





        var blubsix= document.querySelector('.pagesix>.left>.blub');
        

       blubsix.addEventListener("mouseenter",function(){
             

         blubsix.style.width="44.27vw"
          
         blubsix.style.height="91.49vh"
          
        })

       blubsix.addEventListener("mouseleave",function(){
       
         blubsix.style.width="41vw"
          
         blubsix.style.height="86vh"
         
        })




        var blubseven= document.querySelector('.pageseven>.left>.blub');
        

       blubseven.addEventListener("mouseenter",function(){
             

         blubseven.style.width="44.27vw"
          
         blubseven.style.height="91.49vh"
          
        })

       blubseven.addEventListener("mouseleave",function(){
       
         blubseven.style.width="41vw"
          
         blubseven.style.height="86vh"
         
        })




        // _________________________BUTTONS__________________________
          var press= document.querySelectorAll(".buttons>.buttonone")
       

          press.forEach((elem)=>{
            
            elem.addEventListener("mouseenter",()=>{
        
              elem.style.transform="scale(1.08)"
              
            
    
            })
    
            elem.addEventListener("mouseleave",()=>{
            
              elem.style.transform="scale(1)"

            
             
    
            })
              



          })
        







       





        



        



















  
  
  