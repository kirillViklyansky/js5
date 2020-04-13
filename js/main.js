
function createCarousel(slidesCount) {
    var div = document.createElement("div");
    var ul = document.createElement("ul");
    var divIndc = document.createElement("div");
    var divCont = document.createElement("div");
    var style = document.createElement("style");
    var putIn = document.querySelector(".carousel");

    div.className = "corousel";
    div.appendChild(ul);
    ul.className = "slides";
    div.appendChild(divIndc);
    divIndc.className = "indicators"
    div.appendChild(divCont);
    divCont.className = "controls";

    for (var i = 0; i < slidesCount; i++){
      
        var li = document.createElement("li");
        li.className = "slides__item"; 
        var a = document.createElement("a");
        a.setAttribute('href','#');
        li.appendChild(a);
          if (i=== 0){
            li.className = "slides__item active"; 
        }
        ul.appendChild(li);
    }
    
    for (var i = 0; i < slidesCount; i++){
        var span = document.createElement("span");
        span.className = "indicators__item"; 
        span.setAttribute("data-slide-to" ,  i);

        if (i=== 0){
            span.className = "indicators__item active"; 
        }
        divIndc.appendChild(span);
    }
  
    for (var i = 0; i < 3; i++){
        var divItem = document.createElement("div");
        if(i === 0){
            divItem.className = "controls__item controls__prev"; 
            var iDiv = document.createElement("i");
            iDiv.className = "fas fa-chevron-left";
            divItem.appendChild(iDiv);
        }else if(i === 1){
            divItem.className = "controls__item controls__next"; 
            var iDiv = document.createElement("i");
            iDiv.className = "fas fa-chevron-right";
            divItem.appendChild(iDiv); 
        }else if(i === 2){
            divItem.className = "controls__item controls__pause"; 
            var iDiv = document.createElement("i");
            iDiv.className = "fas fa-play"; 
            divItem.appendChild(iDiv);
        }
        divCont.appendChild(divItem);
    }
    
    
    style.innerHTML = ".slides {position: relative;} .controls {position: relative;}  .indicators {display: flex;}";
    
    var pointer = null;
    function func(e) {
    var target = e.target;
        if(target.classList.contains("indicators__item")){
               if(target.tagName === "SPAN"){
            if(pointer !== null) pointer.removeAttribute('style');

            target.style.background = 'red';
            pointer = target;
        }
        }
 
      
       
    };

    divIndc.addEventListener('click', func);

    putIn.appendChild(style);
    putIn.appendChild(div);

}
createCarousel(2);





