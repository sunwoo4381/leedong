document.addEventListener('DOMContentLoaded',()=>{
  
      
    let pen = document.getElementById('pen');
    let figure = document.getElementById('figure');
    let er = document.getElementById('er');
    let color = document.getElementById('color');
    let text = document.getElementById('text');
    let p = document.getElementById('p');
    let span = document.getElementById('span');
    let clearbutton = document.getElementById('button');
    let savebutton = document.getElementById("save_button");
    let font_div = document.getElementById('font');

    let textX=0;
    let textY=50;
    

   
    let count=0;
    let color_pen_count=0;
    let mode=0;
    let rage_value_text="7";

      const canvas =document.getElementById('canvas');
        const ctx = canvas.getContext("2d");
        ctx.fillStyle ="aliceblue";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.strokeStyle = "black";
        ctx.lineWidth=2.5;
        let painting = false;
        let startX;
        let startY;
        let stX;
        let stY;
        let endX;
        let endY;
        let Textsize =0;
        let TextRemovesize = new Array(); 
        let removeI = 0;
        let font_size="30px";
        let font_size_t = 30;
        let s_figure =0;
        let font_family = [" Arial"," Nanum Brush Script, cursive"," Black Han Sans, sans-serif"," Black And White Picture, sans-serif"," Dokdo, cursive"," Gugi, cursive"];
        let font_select=" Arial";
        //clear 버튼
        clearbutton.addEventListener('click',()=>{
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        textX=0;
        textY=50;
        })
//save 버튼 
     savebutton.addEventListener('click',()=>{
           const image = canvas.toDataURL();
           const link = document.createElement("a");
           link.href = image;
           link.download = "leedong.png";
           link.click();
     }) 

 //펜 이벤트
    pen.addEventListener('click',()=>{
        count++;
        s_figure =0;
        ctx.lineWidth=2.5;
        mode=0;
        if(count==1)
        {
        mode = 1;
        let h1 = document.createElement('div');
        let h2 = document.createElement('div');
        let h3 = document.createElement('div');
        let range = document.createElement('input');
        let range_text = document.createElement('div');
          
        p.appendChild(h1);
        p.appendChild(h2);
        p.appendChild(h3);
        p.appendChild(range);
        span.appendChild(range_text);

        range.style.display="block"
        range.type="range";
        range.min="2.5";
        range.max="12";
        range.step="0.1";
        range.value=rage_value_text;

        range_text.innerText = range.value; 
        
        function handleRange(event){ //브러쉬 사이즈 조절할때마다 텍스트 바꾸기
            const size = event.target.value;
            ctx.lineWidth = size;
            rage_value_text=size;
            range_text.innerText = size;
        }
        range.addEventListener('change',handleRange); //브러쉬 크기 조절 이벤트

        h1.style.width = "30px";
        h1.style.height= "30px";
        h1.style.borderRadius = "15px";
        h3.style.width = "50px";
        h3.style.height= "50px";
        h3.style.borderRadius = "25px";
        h1.style.backgroundColor = ctx.strokeStyle;
        h2.style.backgroundColor = ctx.strokeStyle;
        h3.style.backgroundColor = ctx.strokeStyle;
        
        h1.addEventListener("click",()=>{ // 펜1 이벤트
            ctx.lineWidth = 2.5;
            rage_value_text = "2.5";
            p.removeChild(h1);
            p.removeChild(h2);
            p.removeChild(h3);
            p.removeChild(range);
            span.removeChild(range_text);
            count=0;
        })
        h2.addEventListener("click",()=>{ //펜2 이벤트
            ctx.lineWidth = 7;
            rage_value_text = "7";
            p.removeChild(h1);
            p.removeChild(h2);
            p.removeChild(h3);
            p.removeChild(range);
            span.removeChild(range_text);
            count=0;
        })
        h3.addEventListener("click",()=>{ //펜3 이벤트
            ctx.lineWidth = 12;
            rage_value_text = "12";
            p.removeChild(h1);
            p.removeChild(h2);
            p.removeChild(h3);
            p.removeChild(range);
            span.removeChild(range_text);
            count=0;
        })
    }
  
      
 })
 //지우개 이벤트
 er.addEventListener('click',()=>{
     count++;
     s_figure =0;
     mode=0;
     if(count==1)
     {
      mode = 2;
      let h1 = document.createElement('div');
      let h2 = document.createElement('div');
      let h3 = document.createElement('div');
      h1.style.backgroundColor = "white";
      h2.style.backgroundColor = "white";
      h3.style.backgroundColor = "white";
      h1.style.width = "30px";
      h1.style.height= "30px";
      h1.style.borderRadius = "15px";
      h3.style.width = "50px";
      h3.style.height= "50px";
      h3.style.borderRadius = "25px";
      p.appendChild(h1);
      p.appendChild(h2);
      p.appendChild(h3);
      h1.addEventListener("click",()=>{
          ctx.lineWidth = 15;
          p.removeChild(h1);
          p.removeChild(h2);
          p.removeChild(h3);
          count=0;
      })
      h2.addEventListener("click",()=>{
          ctx.lineWidth = 30;
          p.removeChild(h1);
          p.removeChild(h2);
          p.removeChild(h3);
          count=0;
      })
      h3.addEventListener("click",()=>{
          ctx.lineWidth = 60;
          p.removeChild(h1);
          p.removeChild(h2);
          p.removeChild(h3);
          count=0;
   
      })
    }
 })
 // color 이벤트
color.addEventListener('click',()=>{
    count++;
    s_figure =0;
    mode=0;
    ctx.lineWidth=2.5;
    color_pen_count++;
    if(count==1)
    {
        let color_list= new Array();
        let color_list_p = document.createElement('pre');
        p.appendChild(color_list_p);
        for(let i=0;i<9;i++)
        {
             color_list[i] = document.createElement('div');
             color_list.class="color_list";
             color_list_p.appendChild(color_list[i]);
        }
        let color_c = ["black","white","red","orange","yellow","green","blue","navy","purple"];
        for(let i=0;i<9;i++)
        {
           color_list[i].style.backgroundColor = color_c[i];
        }
        for(let i=0;i<9;i++)
        {
           color_list[i].addEventListener('click',()=>{
                   ctx.strokeStyle = color_c[i];
                  p.removeChild(color_list_p);
                  count =0;
                  color_pen_count=0;
           })
        }
        
    }
 })
 //도형 이벤트
 figure.addEventListener('click',()=>{
    s_figure =0;
    count++;
    ctx.lineWidth=2.5;
    mode=0;
    if(count==1)
    {
    let rect = document.createElement('span');
    let circle = document.createElement('span');
    let tri = document.createElement('span');
    
    p.appendChild(rect);
    p.appendChild(tri);
    p.appendChild(circle);
    
    
    rect.innerHTML="사각형";
    rect.id="rect"
    circle.innerHTML="원";
    circle.id="circle"
    tri.innerHTML="삼각형";
    tri.id="tri";
    rect.addEventListener('click',()=>{
        count=0;
        mode=3;
        s_figure=1;
        alert("사각형 그리기");
        p.removeChild(rect);
        p.removeChild(circle);
        p.removeChild(tri);
    })
    tri.addEventListener('click',()=>{
        count=0;
        mode=3;
        s_figure=2;
        alert("삼각형 그리기");
        p.removeChild(rect);
        p.removeChild(circle);
        p.removeChild(tri);
        
    })
    circle.addEventListener('click',()=>{
        mode=3;
        count=0;
        s_figure=3;
        alert("원 그리기");
        p.removeChild(rect);
        p.removeChild(circle);
        p.removeChild(tri);
       
    })
  
}

    
})
//text이벤트
text.addEventListener('click',()=>{
    s_figure =0;
    count++
    mode=0;
    if(count==1)
    {
    let input = document.createElement('input');
    let button = document.createElement('input');
    let stop_button = document.createElement('input');
    let button_2 = document.createElement('input');
    let font_size_range = document.createElement('input');
    let return_button = document.createElement('input');

    let font_size_text = document.createElement('div');
    let select_font = new Array();
    for(let i=0;i<font_family.length;i++)
    {
            select_font[i] = document.createElement('input');
            select_font[i].type = "button";
            select_font[i].value = font_family[i];
            font_div.appendChild(select_font[i]);
    }

    input.type="input";
    button.type = "button";
    button.value = "입력";
    stop_button.type="button";
    stop_button.value ="정지";
    return_button.type="button";
    return_button.value="되돌리기";
    button_2.type="button";
        button_2.value="줄 바꿈";
    
    font_size_range.type="range";
    font_size_range.min="10";
    font_size_range.max="60";
    font_size_range.step="1";
    font_size_text.innerHTML=font_size;
    font_size_range.value = font_size_t;
    font_size_range.addEventListener('change',()=>{
        font_size = font_size_range.value+"px";
        font_size_t = font_size_range.value        
        font_size_text.innerHTML=font_size;
    })

    p.appendChild(input);
    p.appendChild(button);
    p.appendChild(stop_button);
    p.appendChild(return_button);
    p.appendChild(button_2);
    
    span.appendChild(font_size_range);
    span.appendChild(font_size_text);
    

 //font 선택
 for(let i=0;i<select_font.length;i++)
 {
      select_font[i].addEventListener('click',()=>{
          alert(font_family[i]);
          font_select=font_family[i]
      }) 
 }




 //텍스트 입력
    button.addEventListener("click",()=>{
        let Itext = input.value;
        ctx.fillStyle = ctx.strokeStyle;
        ctx.font=font_size+font_select;
        ctx.fillText(Itext,textX,textY);
        let a = ctx.measureText(input.value); //textbox 객체정보 저장
        Textsize = a.actualBoundingBoxRight//text 길이 알아내기
        TextRemovesize[removeI] =Textsize;
        removeI++;
        textX += Textsize;

    })




//텍스트 입력 종료
    stop_button.addEventListener('click',()=>{
        count=0;
        ctx.font = font_size+" Arial";
        p.removeChild(input);
        p.removeChild(button);
        p.removeChild(stop_button);
        p.removeChild(button_2);
        p.removeChild(return_button);
        span.removeChild(font_size_range);
        span.removeChild(font_size_text);
        for(let i=0;i<font_family.length;i++)
        {
                font.removeChild(select_font[i]);
        }
        
    })
    



// 되돌리기
    return_button.addEventListener('click',()=>{
        ctx.fillStyle="aliceblue";
        removeI--;
       ctx.fillRect(textX-TextRemovesize[removeI],textY-50,TextRemovesize[removeI],60);
       if(textX!=0)
       {
        textX=textX-TextRemovesize[removeI];
       }
    })
    



    //줄바꿈
    button_2.addEventListener('click',()=>{
        textX=0;
        textY+=60;
        alert("줄 바꿈");
 })

}

})

//-----------------------------------------------------------------------------------------------

 
//------------도형 그리기 함수
//사각형
 function canvasRectDraw(currentX,currentY){
    if(!painting)
    {
        ctx.beginPath();
        ctx.strokeRect(startX,startY,currentX-startX,currentY-startY);
    } 
}
//삼각형
function canvasTriDraw(currentX,currentY){
        if(!painting)
        {
            ctx.beginPath();
            ctx.moveTo((startX+currentX)/2,startY);
            ctx.lineTo(startX,currentY);
            ctx.lineTo(currentX,currentY);
            ctx.closePath();
            ctx.stroke();
        }

}
//원 
function canvasCircleDraw(currentX,currentY)
{
    if(!painting)
    {
          ctx.beginPath();
          let diameter = (startX-currentX)*(startX-currentX)+(startY-currentY)*(startY-currentY);
          let radius = Math.sqrt(diameter)/2;
          let x =Math.abs((startX-currentX)/2);
          let y =Math.abs((startY-currentY)/2);
          if(startX>currentX) x=startX-(x);
            else x = startX+(x);
        
            if(startY>currentY) y=startY-(y);
            else y=startY+(y);
        
          alert(startX+' '+startY);
          ctx.arc(x,y,radius,0,Math.PI*2);
          ctx.stroke();
    }
}
//--------------------------------------------------------     
 // 그리기, 지우기 객체
 let Note = {
       stopPainting : function(event){
        painting = false;
        endX=event.offsetX;
        endY=event.offsetY;
        if(s_figure==1)
        {
            canvasRectDraw (endX,endY);
        }
        if(s_figure==2)
        {
        canvasTriDraw(endX,endY);
        }
        if(s_figure==3)
        {
            canvasCircleDraw(endX,endY);
        }
       },
       onMousemove : function(event){
        const x = event.offsetX;
        const y =event.offsetY;
        if(mode == 1){
            if(!painting)
            {
                ctx.beginPath();
                ctx.moveTo(x,y);
            }
            else {
                ctx.lineTo(x,y);
                ctx.stroke();
            } 
        } 
        else if(mode == 2)
        {
            if(painting) {
            ctx.clearRect(x-ctx.lineWidth/2, y-ctx.lineWidth/2, ctx.lineWidth, ctx.lineWidth);
             } 
        }
        else if(mode==3)
        {
            if (!painting)
        {
            return ;
        }
        let nowX = event. offsetX ;
        let nowY = event. offsetY ;
        if(s_figure==1)
        {
        canvasRectDraw (nowX,nowY);
        } else if(s_figure==2)
        {
            canvasTriDraw(nowX,nowY);
        } else if(s_figure ==3)
        {
            canvasCircleDraw(nowX,nowY);
        }
        stX = nowX;
        stY = nowY;
        }
        },
        startPainting : function(event){
            painting = true;
            startX = event.offsetX;
            startY = event.offsetY;
            stX = event. offsetX ;
            stY = event. offsetY ;  
           },
       outPainting : function(event)
       {
        painting=false;
        if(s_figure!=0)
        {
            alert("도형 그리기 종료");    
            s_figure=0;
        }
       }
       }
 //----------------------------------------
//canvas 이벤트
if(canvas){
            canvas.addEventListener("mousedown",Note.startPainting);
            canvas.addEventListener("mousemove",Note.onMousemove);
            canvas.addEventListener("mouseup",Note.stopPainting);
            canvas.addEventListener("mouseout",Note.outPainting);
          }

})