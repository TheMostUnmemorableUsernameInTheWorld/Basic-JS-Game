let santaSprite = Class SantaSprite
{
  constructor(interval, baseAnimation, baseXPosition, baseYPosition, positionCap, positionIncrement, imageID)
  {
    this._interval = interval;
    this._baseAnim = baseAnimation;
    this._baseXPos = baseXPosition;
    this._baseYPos = baseYPosition;
    this._posCap = positionCap;
    this._posIncrement = positionIncrement;
    this._image = imageID;
    this._tID;
  }
  var animate = function()
  {
    console.log(this._baseAnim, 'Animation Initializing...');
  }
}

let changeSantaAnimation = function()
{

}
