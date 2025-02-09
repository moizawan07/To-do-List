var ul = document.getElementById('ul')
 function enterKey ({key}){
   console.log(key);
   
   if(key === 'Enter'){
      add()
   }
 }

function add(){
    var input = document.getElementById('input');
   if(input.value){
    var li = document.createElement('li');
    var litext = document.createTextNode(input.value);         // li value 
    li.appendChild(litext);

    var editbtn = document.createElement('i');           // Edit elemnt
  
    editbtn.setAttribute('class', 'fa-solid fa-pencil')
    editbtn.setAttribute('onclick', 'edit(this)')
   //  console.log(editbtn);

    li.appendChild(editbtn)

    var delbtn = document.createElement('i');         // Delete elment
    delbtn.setAttribute('class', 'fa-solid fa-xmark')
    delbtn.setAttribute('onclick', 'del(this)')
    // console.log(delbtn);
    li.appendChild(delbtn)
                                                       
    var donebtn = document.createElement('i');         // Delete button
    donebtn.setAttribute('class', 'fa-solid fa-check')
    donebtn.setAttribute('onclick', 'done(this)')
    // console.log(delbtn);
    li.appendChild(donebtn)                                               // Done elemnt

    ul.appendChild(li);
    input.value = ''
}
else{
    alert('insert a value')
}
  var li2 = ul.getElementsByTagName('li');
  if(li2.length > 3){
    document.getElementById('dealall').style.display = 'block'
  }
  
    
}
function edit(e){
   var livalue = e.parentNode.childNodes[0].nodeValue;
   
   var newlivalue = prompt('Enter a update value', livalue);
   if(newlivalue){
       e.parentNode.childNodes[0].nodeValue = newlivalue
       if(livalue != newlivalue){
       let counter = document.getElementById('noofTime1').innerHTML;
       document.getElementById('Edit').style.display = 'block'
       document.getElementById('noofTime1').innerHTML = ++counter
       if(document.getElementById('ul').innerHTML == ''){
          document.getElementById('Edit').style.display = 'none'
         document.getElementById('deleted').style.display = 'none'
         document.getElementById('complete').style.display = 'none'
          counter = document.getElementById('noofTime1').innerHTML = 0;
          counter = document.getElementById('noofTime3').innerHTML = 0;
          counter = document.getElementById('noofTime2').innerHTML = 0;
       }}
   }
   

   
}
function del(e){
  e.parentNode.remove()
  let counter = document.getElementById('noofTime3').innerHTML;
  document.getElementById('deleted').style.display = 'block'
  document.getElementById('noofTime3').innerHTML = ++counter;
  if(document.getElementById('ul').innerHTML == ''){
     document.getElementById('deleted').style.display = 'none'
      document.getElementById('complete').style.display = 'none'
      document.getElementById('Edit').style.display = 'none'
     counter = document.getElementById('noofTime3').innerHTML = 0;
     counter = document.getElementById('noofTime2').innerHTML = 0;
     counter = document.getElementById('noofTime1').innerHTML = 0;
  }
  
 }
 function deleAll(){
    document.getElementById('ul').innerHTML = ''
     document.getElementById('dealall').style.display = 'none'
 }

 function done(e){
     e.parentNode.remove()
     let counter = document.getElementById('noofTime2').innerHTML;
     document.getElementById('complete').style.display = 'block'
     document.getElementById('noofTime2').innerHTML = ++counter;
     if(document.getElementById('ul').innerHTML == ''){
        document.getElementById('complete').style.display = 'none'
     document.getElementById('deleted').style.display = 'none'
     document.getElementById('Edit').style.display = 'none'
        counter = document.getElementById('noofTime2').innerHTML = 0;
        counter = document.getElementById('noofTime3').innerHTML = 0;
        counter = document.getElementById('noofTime1').innerHTML = 0;
     }
     
 }
