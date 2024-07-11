var typed = new Typed('#element', {
    strings: ['Software Developer', 'Educator'],
    typeSpeed: 70,
  });

  const prevElem=document.querySelector(".prev")
  const nextElem=document.querySelector(".next")
  const imgcontainer=document.querySelector(".img-container")
  const imgElem=document.querySelectorAll(".pr-img")
let timeout;
  let currimg=1
  nextElem.addEventListener("click",()=>{
currimg++
    clearTimeout(timeout)
updateimg()
  })
  prevElem.addEventListener("click",()=>{
    currimg--
    clearTimeout(timeout)
    updateimg()
  })
updateimg()
  function updateimg(){
    if(currimg>imgElem.length){
      currimg=1
    }else if(currimg<1)[
      currimg=imgElem.length
    ]


imgcontainer.style.transform=`translateX(${-(currimg-1)*100}%)`
 timeout=setTimeout(()=>{
currimg++
updateimg()
},2000)
  }