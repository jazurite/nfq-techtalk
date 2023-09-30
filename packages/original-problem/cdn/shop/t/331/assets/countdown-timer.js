/** Shopify CDN: Minification failed

Line 14:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 15:12 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 22:15 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 23:2 Transforming const to the configured target environment ("es5") is not supported yet
Line 30:9 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 36:6 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 39:2 Transforming const to the configured target environment ("es5") is not supported yet
Line 50:8 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 59:7 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
class Countdown {
 constructor(expiredDate, onRender, onComplete) {
  this.setExpiredDate(expiredDate);

  this.onRender = onRender;
  this.onComplete = onComplete;
 }

 setExpiredDate(expiredDate) {
  const currentTime = new Date().getTime();

  this.timeRemaining = expiredDate - currentTime;

  this.timeRemaining > 0 ? this.start() : this.complete();
 }

 complete() {
  if (typeof this.onComplete === 'function') {
   this.onComplete();
  }
 }

 start() {
  this.update();

  const intervalId = setInterval(() => {
   this.timeRemaining -= 1000;
   if (this.timeRemaining < 0) {
    this.complete();
    clearInterval(intervalId);
   } else {
    this.update();
   }
  }, 1000);
 }

 getTime() {
  return {
   days: Math.floor(this.timeRemaining / 1000 / 60 / 60 / 24),
   hours: Math.floor(this.timeRemaining / 1000 / 60 / 60) % 24,
   minutes: Math.floor(this.timeRemaining / 1000 / 60) % 60,
   seconds: Math.floor(this.timeRemaining / 1000) % 60
  };
 }

 update() {
  if (typeof this.onRender === 'function') {
   this.onRender(this.getTime());
  }
 }
}