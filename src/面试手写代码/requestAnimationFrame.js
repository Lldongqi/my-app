let element = document.getElementById('root1');
let height = 0;
let frame = 0;
function callBack(timestamp) {
  console.log('高度：' + height);
  element.style.height = ++height + 'px';
  if (height < 1000) {
    frame++;
    console.log('帧率：' + frame);
    window.requestAnimationFrame(callBack);
  }
}

setInterval(() => {
  console.log(frame);
  frame = 0;
}, 1000);
window.requestAnimationFrame(callBack);
