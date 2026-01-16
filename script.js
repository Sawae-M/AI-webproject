document.getElementById('cta').addEventListener('click', ()=> {
  const nick = (document.getElementById('nickname').value || 'ゲスト').trim();
  const choices = ['大吉', '中吉', '小吉'];
  const pick = choices[Math.floor(Math.random()*choices.length)];
  const el = document.getElementById('result');
  el.textContent = `${nick}さんの運勢：${pick}`;
});