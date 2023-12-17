const change = document.getElementById('btn');

change.addEventListener('click', ()=>{
  setTimeout( function textContent(){
    document.getElementById('text').textContent ='ボタンをクリックしました';
  } , 2000)
})
  
  
  