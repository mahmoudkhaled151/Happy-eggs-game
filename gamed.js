var start= document.getElementById("bot");
start.addEventListener("click" , function()
{
    playGame();

});

var move=0;
document.body.addEventListener("keydown" , function(eventinfo)
{
    if (eventinfo.keyCode==13)
    {
        playGame();
    }

});
function playGame()
{
    let sound1=new Audio("photos/happychicken.mp3");
  sound1.play();
    var counter=0
    document.getElementById("hide1").style.display='none';
    document.getElementById("hide2").style.display='none';
    var body = document.getElementById('body');
    body.style.cursor="none";
    
    var basket = document.getElementById("basket");
    document.addEventListener("mousemove" , function(e)
    {
    basket.style.left= e.clientX;
    });
    
    document.body.addEventListener("keydown" , function(eventinfo1)
    {
        if (eventinfo1.keyCode==39)
        {
            if (window.screen.availWidth<=move)
            {
                move = window.screen.availWidth-20;
            }
            else 
            {
            move=move+20;
            basket.style.left= move+"px";
            }
           
        }
        else if (eventinfo1.keyCode==37)
        {
            move=move-20;
            basket.style.left= move+"px";
            if (move<=0)
            {
                move = 0;
            }
        }
    });

    var egg= document.getElementsByClassName("checken-egg");
    //detect position of egg
    var posx=[];
    var posy=[];
    var rect=[];
    //detect position of broken egg
    var posorx=[];
    var posory=[];
    var rectnew  =[];
    //detect frist position of egg
    var px=[];
    var py=[];
    var img = document.getElementsByClassName("che");
    for (var i=0 ; i<egg.length ; i++)
    {
        //rectnew[i]=x.item(i).getBoundingClientRect();
        rect[i] = egg.item(i).getBoundingClientRect();
        posx[i]=rect[i].right + window.scrollX;
        px[i]=posx[i];
       // posorx[i]=rectnew[i].left + window.scrollX;
        //console.log(posorx[i]);
    
        posy[i]=rect[i].top + window.scrollY;
        //posory[i]=rectnew[i].bottom + window.scrollY;
        py[i]=posy[i];
    }
    function moveegg2()
    {
      
        var rect1 =basket.getBoundingClientRect();
        var pos1y=rect1.top + window.scrollY;
        var pos1x=rect1.right + window.scrollX;
      
        posy[0]=posy[0]+30;
        egg[0].style.top=posy[0]+"px";
        
        if ((pos1y-posy[0])<=30 && (pos1x-posx[0])<=90 && (pos1x-posx[0])>=0 )
        {
              
            clearInterval(inte1);
            egg[0].src="";
            counter++;
            let sound2=new Audio("photos/score.mp3");
             sound2.play();
           score= document.getElementById("score_egg").innerHTML="score :" + counter;
            posx[0]=px[0];
            posy[0]=py[0];
            egg[0].src="photos/Happy_Egg.svg";
            inte1= setInterval(moveegg2,220 );
        }
    
        if (posy[0]>=pos1y )
    {
        
        clearInterval(inte1);
       
        
        
        displayImage("photos/Broken_Egg.svg"  , posy[0] , posx[0]-15 , egg[0].width+30 , 0) ;
    console.log(posx[0]);
        var stop =setTimeout(displayImage, 1000  ," " , "posy[0]" , "posx[0]-15" , "egg[0].width+30" , "0");
        
       posx[0]=px[0];
       posy[0]=py[0];
       egg[0].src="photos/Happy_Egg.svg";
       inte1= setInterval(moveegg2,260 );
    }
    
    }
    
    
    function moveegg1()
    {
        var rect1 =basket.getBoundingClientRect();
        var pos1y=rect1.top + window.scrollY;
        var pos1x=rect1.right + window.scrollX;
      
        posy[1]=posy[1]+30;
        egg[1].style.top=posy[1]+"px";
        
        if ((pos1y-posy[1])<=30 && (pos1x-posx[1])<=90 && (pos1x-posx[1])>=0 )
        {
              
            clearInterval(inte);
            egg[1].src="";
            counter++;
            let sound2=new Audio("photos/score.mp3");
             sound2.play();
            score= document.getElementById("score_egg").innerHTML="score :" + counter;
            posx[1]=px[1];
            posy[1]=py[1];
            egg[1].src="photos/Happy_Egg.svg";
            inte= setInterval(moveegg1,170 );
        }
    
        if (posy[1]>=pos1y )
    {
        
        clearInterval(inte);
       
        
        
        displayImage("photos/Broken_Egg.svg"  , posy[1] , posx[i]+15 , egg[1].width+30 , 1) ;
    
        var stop =setTimeout(displayImage, 1000  ," " , "posy[1]" , "posx[1]+15" , "egg[1].width+30" , "1");
       
    
       posx[1]=px[1];
       posy[1]=py[1];
       egg[1].src="photos/Happy_Egg.svg";
       inte= setInterval(moveegg1,210 );
       
    
    }
    
    }
    function moveegg3()
    { var rect1 =basket.getBoundingClientRect();
        var pos1y=rect1.top + window.scrollY;
        var pos1x=rect1.right + window.scrollX;
      
        posy[2]=posy[2]+30;
        egg[2].style.top=posy[2]+"px";
        
        if ((pos1y-posy[2])<=30 && (pos1x-posx[2])<=90 && (pos1x-posx[2])>=0 )
        {
              
            clearInterval(inte2);
            egg[2].src="";
            counter++;
            let sound2=new Audio("photos/score.mp3");
             sound2.play();
            score= document.getElementById("score_egg").innerHTML="score :" + counter;
            posx[2]=px[2];
            posy[2]=py[2];
            egg[2].src="photos/Happy_Egg.svg";
            inte2= setInterval(moveegg3,250 );
        }
    
        if (posy[2]>=pos1y )
    {
        
        clearInterval(inte2);
       
        
        
        displayImage("photos/Broken_Egg.svg"  , posy[2] , posx[2] , egg[2].width+30 , 2) ;
        console.log(posx[2]);
        var stop =setTimeout(displayImage, 1000  ," " , "posy[2]" , "posx[2]" , "egg[2].width+30" , "2");   
       
       posx[2]=px[2];
       posy[2]=py[2];
       egg[2].src="photos/Happy_Egg.svg";
       inte2= setInterval(moveegg3,200 );
       
    
    }
    
    }
    
    
    function displayImage(src, bottom , right , size , j) {
        
        //var img = document.createElement("img");
       // img[j].style.position="absolute";
        img[j].src = src;
        img[j].style.left = right+"px";
        img[j].style.top = bottom+"px";
        img[j].width=size;
       }
    
    
    
    var inte;
    var inte1;
    var inte2;
    inte= setInterval(moveegg1,170 );
    inte1= setInterval(moveegg2,250 );
    inte2= setInterval(moveegg3,200 );
        

}