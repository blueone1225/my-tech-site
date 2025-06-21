// 切換文字按鈕
function changeText() {
  document.getElementById('txt-target').innerText = '文字已被改變！';
}

// modal 彈窗
function showModal() { document.getElementById('modal').style.display = 'flex'; }
function closeModal() { document.getElementById('modal').style.display = 'none'; }

// 計算器
function calc() {
  let a=+document.getElementById('num1').value;
  let b=+document.getElementById('num2').value;
  let op=document.getElementById('op').value;
  let res=document.getElementById('result');
  if(op==='add') res.value=a+b;
  if(op==='sub') res.value=a-b;
  if(op==='mul') res.value=a*b;
  if(op==='div') res.value=b? (a/b).toFixed(2):'∞';
}

// 輪播
let idx=0;
function carousel() {
  const imgs = document.querySelectorAll('.carousel img');
  imgs[idx].classList.remove('active');
  idx = (idx+1) % imgs.length;
  imgs[idx].classList.add('active');
}
setInterval(carousel, 3000);
