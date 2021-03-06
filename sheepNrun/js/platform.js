class Platform {
    constructor(context) {
        this.context = context;
        this.image = new Image();

        this.x = 0;
        this.y = 0;
        this.height = 130;
        this.width = 200;
    }

    init() {
        return new Promise((resolve) => {
            this.image.src = 'assets/platform.png';
            this.image.addEventListener('load', resolve);
        });
    }

    updatePosition(x, y) {
        this.x = x;
        this.y = y;
    }

    render() {
        // this.context.strokeRect(this.x, this.y, this.width, this.height);
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}