module.exports = (tick) => {
  let count = 10;

  const timer = setInterval(() => {
    tick(count--);

    if (count <= 0) {
      clearInterval(timer);
    }
  }, 1000);
};
