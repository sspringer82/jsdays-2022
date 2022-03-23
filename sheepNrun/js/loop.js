class Loop {

    constructor(context, player, background, plattformCollection) {
        this.context = context;
        this.player = player;
        this.background = background;
        this.plattformCollection = plattformCollection;
        this.isMoving = false;
    }

    toggleMoving() {
        this.isMoving = !this.isMoving;
    }

    update(timestamp) {
        this.player.update(timestamp);
        if (this.isMoving) {
            this.plattformCollection.update(timestamp);
        }
    }

    render() {
        this.background.render(
            this.context.canvas.width,
            this.context.canvas.height,
        );
        this.plattformCollection.render();
        this.player.render();
    }

    step(timestamp) {
        this.update(timestamp);
        this.render();
        requestAnimationFrame(this.step.bind(this));
    }

}