function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = Math.min(2048,(value || 2) * 2);// squares are doubled but cant go over 2048 unless the game ended

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

function Tile(position, value,won) {
  this.x                = position.x;
  this.y                = position.y;
  this.value = (value || 2) * 2;
  if(!won || value === 4096)
    this.value            = Math.min(2048,this.value);// squares are doubled but cant go over 2048 unless the game ended

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
