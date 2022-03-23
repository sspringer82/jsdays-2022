document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('sheep-and-run');
  const context = canvas.getContext('2d');

  const background = new Background(context);
  const promise = background.init('assets/background1.png');

  const platforms = [
    new Platform(context),
    new Platform(context),
    new Gap(context),
    new Platform(context),
    new Platform(context),
    new Platform(context),
    new Gap(context),
    new Platform(context),
    new Gap(context),
  ];

  const platformPromises = platforms
    .map((platform, index) => {
      platform.x = index * platform.width;
      platform.y = 282;
      return platform;
    }).map((platform) => platform.init());

  Promise.all([promise, ...platformPromises]).then(() => {
    background.render(canvas.clientWidth, canvas.height);
    platforms.forEach((platform) => platform.render());
  });
});
