document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('sheep-and-run');
  const context = canvas.getContext('2d');

  const background = new Background(context);
  const promise = background.init('assets/background1.png');

  const platformCollection = new PlatformCollection(context);
  const platformPromise = platformCollection.init();

  const player = new Player(context);
  const playerPromise = player.init();

  Promise.all([promise, platformPromise, playerPromise]).then(() => {
    const loop = new Loop(context, player, background, platformCollection);
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        loop.toggleMoving();
      } else if (e.code === 'Space') {
        player.jump();
      }
    });
    player.y = 202;
    requestAnimationFrame(loop.step.bind(loop));
  });
});
