const Player = class {
    constructor(bounds) {
        this.x = Math.random() * bounds.x;
        this.y = Math.random() * bounds.y;
    };

    distanceFrom(object) {
        return Math.sqrt((Math.pow(object.x - this.x, 2)) + (Math.pow(object.y - this.y, 2)));
    }
};
module.exports = Player;