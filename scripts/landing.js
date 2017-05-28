 var animatePoints = function() {
 
                 var points = document.getElementsByClassName('point');
 
                 var revealPoints =function(index){
                     points[index].style.opacity = 1;
                     points[index].style.transform = "scaleX(1) translateY(0)";
                     points[xndex].style.msTransform = "scaleX(1) translateY(0)";
                     points[indec].style.WebkitTransform = "scaleX(1) translateY(0)";
                     
                 }
     for(var i =0;i< points.length;i++){
         revealPoints(i);
     }
 
             };



    
    
