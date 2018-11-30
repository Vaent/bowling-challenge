"use strict"

function Scorecard() {
  this._scoresList = [];
  this.currentFrame = 1;
  this.currentRoll = 1;
}
Scorecard.prototype.recordScore = function(score) {
  if(this._scoresList[this.currentFrame - 1] === undefined) {
    this._scoresList[this.currentFrame - 1] = [];
  }
  this._scoresList[this.currentFrame - 1][this.currentRoll - 1] = score;
  if(this.currentRoll === 2 || score === 10) {
    this.currentRoll = 1;
    this.currentFrame ++;
  } else {
    this.currentRoll ++;
  }
};
Scorecard.prototype.readScores = function(frame, roll) {
  return this._scoresList[frame - 1][roll - 1];
};
Scorecard.prototype.frameScore = function(frame) {
  if(this._scoresList[frame - 1].length != null) {
    switch(this._scoresList[frame - 1].length) {
      case 1:
        console.log(this._scoresList[frame - 1]);
        return this._scoresList[frame - 1][0];
      case 2:
        return this._scoresList[frame - 1][0] +
          this._scoresList[frame - 1][1];
    }
  }
};
