let tmp1 = new Date();
console.log(
  tmp1.getHours() + ":" + tmp1.getMinutes() + ":" + tmp1.getSeconds()
);
window.setTimeout(() => {
  let tmp2 = new Date();
  console.log(
    tmp2.getHours() + ":" + tmp2.getMinutes() + ":" + tmp2.getSeconds()
  );
}, 5000);
