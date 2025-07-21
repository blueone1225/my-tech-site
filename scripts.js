// 等待 DOM 載入
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.container').forEach(el=>{
    el.style.opacity=1; el.style.transform='translateY(0)';
  });
  loadComments(); loadUser();
});

// 滑入粒子與 icon 觸發 AOS
AOS.init({duration:800});

// 切換文字
// 切換文字（隨機三句）
/*function changeText() {
  const texts = [
   '文改變.',
    '字變文字.',
    '已變?',
'霓虹閃爍的巷口，記憶在數據洪流中碎裂成聲音的殘影。',
    '他在電路夢境裡迷失自己，心跳被機械節奏重寫。',
    '城市的天空不再有星辰，只有監控在夜裡低語。'
  ];
  const randomIndex = Math.floor(Math.random() * texts.length);
  document.getElementById('txt-target').innerText = texts[randomIndex];
}*/




// Modal
function showModal(){document.getElementById('modal').style.display='flex';}
function closeModal(){document.getElementById('modal').style.display='none';}

// 計算機
function calc(){
  let a=+document.getElementById('num1').value,
      b=+document.getElementById('num2').value,
      op=document.getElementById('op').value,
      r=document.getElementById('result');
  r.value = op==='add'? a+b : op==='sub'? a-b : op==='mul'? a*b : b? (a/b).toFixed(2):'∞';
}

// 輪播
let idx=0;
function carousel(){
  const imgs=document.querySelectorAll('.carousel img');
  imgs[idx].classList.remove('active');
  idx=(idx+1)%imgs.length;
  imgs[idx].classList.add('active');
}
setInterval(carousel,3000);

// 留言板
function postComment(){
  const txt=document.getElementById('comment-input').value.trim();
  if(!txt)return;
  const com={text:txt, time:new Date().toLocaleString()};
  const arr=JSON.parse(localStorage.getItem('comments')||'[]');
  arr.unshift(com);
  localStorage.setItem('comments',JSON.stringify(arr));
  document.getElementById('comment-input').value='';
  loadComments();
}
function loadComments(){
  const arr=JSON.parse(localStorage.getItem('comments')||'[]');
  const ul=document.getElementById('comment-list');
  if(!ul)return;
  ul.innerHTML='';
  arr.forEach(c=>{
    const li=document.createElement('li');
    li.textContent=`[${c.time}] ${c.text}`;
    ul.appendChild(li);
  });
}

// 模擬登入 + 記住我
function login(e){
  e.preventDefault();
  const user=document.getElementById('user').value.trim();
  const pass=document.getElementById('pass').value;
  const remember=document.getElementById('remember').checked;
  if(!user||!pass){alert('請填帳號密碼');return;}
  localStorage.setItem('user',user);
  if(remember) localStorage.setItem('remember',user);
  else localStorage.removeItem('remember');
  window.location.href='index.html';
}
function loadUser(){
  const u=localStorage.getItem('user');
  const r=localStorage.getItem('remember');
  if(r) document.getElementById('user')?.setAttribute('value',r);
  if(u&&document.getElementById('welcome')){
    document.getElementById('welcome').innerText=`歡迎你, ${u}!`;
  }
}
function logout(){
  localStorage.removeItem('user');
  window.location.href='login.html';
}
