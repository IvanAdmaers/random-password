'use strict';

const generatePass = fieldSelector =>{
  const field = document.querySelector(fieldSelector);
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let passLength = 10;
  let pass = '';

  for(let i = 0; i<passLength; i++){
    const randomNum = Math.floor(Math.random() * chars.length);
    pass += chars.substring(randomNum, randomNum + 1);
  }

  field.value = pass;
};

const showAlert = (alertSelector, activeClass)=>{
  const alert = document.querySelector(alertSelector);

  alert.classList.add(activeClass);
  setTimeout(()=>alert.classList.remove(activeClass), 300);
};

const copyPass = passSelector=>{
  const copyPassText = document.querySelector(passSelector);
  copyPassText.select();
  copyPassText.setSelectionRange(0, 999);
  document.execCommand('copy');
  
  showAlert('.alert', 'show');
};

const arrayRand = arr=>{
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};



const btn = document.getElementById('btn'),
      copyBtn = document.getElementById('copy-btn');


const imgArr = ['https://cdn.pixabay.com/photo/2018/10/04/11/12/waterfall-3723422_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/09/27/09/15/lighthouse-5606162_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/09/18/19/31/laptop-5582775_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/09/25/19/17/penguins-5602408_960_720.jpg'];
document.body.style.cssText = `
  background-image: url(${arrayRand(imgArr)});
`;



btn.addEventListener('click', ()=>{
  generatePass('#password');
});

copyBtn.addEventListener('click', ()=>{
  copyPass('#password');
});








