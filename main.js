console.log('creat bay Bhavesh ❤');

var c = document.getElementById('menu');

var i = document.getElementById('meo');

var ok = document.getElementById('upload');

var ss = document.getElementById('start');

var uo = document.getElementById('jo');

function t(){
  c.classList.toggle('menu_js');
  
  i.classList.toggle('bh');
  
  ok.classList.toggle('join');
  
  ss.classList.toggle('join');
  
  uo.classList.toggle('join');
  
  
}




function upload(){
  var h = document. getElementById("jo").value;
  
  
  
  var input  = document. getElementById('upload');
  var freader=new FileReader();
  freader. readAsDataURL(input.files[0]);
  freader. onload=function(){
    document.getElementById(h). src=freader.result;
  }
  
  
   
   
  document. getElementById("kk"). innerHTML += `<div id="fu"><center><br><video width="369px" height="200px"  controls="controls" id="${h}" style="border: 2px solid black"><source id="src"></video><div><p style="margin:0;padding:0;float:left;margin-left:10px;"><hk style="color:bleck;"><b>song nem =></b> </hk>${h}</p><button id="but" style="margin-left:1px; position: absolute;" onclick="soj()" >Delete</button></div><br><br><br></div>`
  
  hgt()
  t()

  var ga = document.getElementById('but')
  
  var go = document.getElementById('fu')
  
  
 ga.onclick = function hhh(){ 
    go.classList.add('di')
document.go.style.display='none';
  }
  
  /* 
  
var ga = document.getElementById('but')
  
  var go = document.getElementById('fu')

function soj(){
    go.classList.add('di')
  };
  */
document.getElementById('iu').style.display='none'
};

  function start(){
    document. getElementById('video'). play();
  };


function hgt(){ 
  document.getElementById("andkbox").style.display='block';
  }
