import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-testarea',
  templateUrl: './testarea.component.html',
  styleUrls: ['./testarea.component.css']
})
export class TestareaComponent implements OnInit {
  mouseX;
  mouseY;
  screenX;
  screenY;
  floatX;
  floatY;
  DISTANCE;
  SPEED = 5;
  SIZE = 100;
  myTimer;

  constructor(private elRef:ElementRef) {
  }

  ngOnInit() {
    this.updateSize();
    this.initFloater();
  }

  updatePosition(event) {
    if (event.srcElement.className == 'boundaries') {
      this.mouseX = event.offsetX;
      this.mouseY = event.offsetY;
      if (this.mouseX < 0) { this.mouseX = 0 }
      if (this.mouseY < 0) { this.mouseY = 0 }
      // console.log(event);
      this.checkProximity();
    }
  }

  updateSize() {
    const boundaries = this.elRef.nativeElement.querySelector('.boundaries');
    this.screenX = boundaries.offsetWidth;
    this.screenY = boundaries.offsetHeight;
    this.initFloater();
    this.DISTANCE = Math.round(this.screenX / 10)
      + (this.screenY / 10);
    console.log(this.DISTANCE);
  }

  getRandom() {
    return Math.round(Math.random() * 10);
  }

  initFloater() {
    this.floatX = Math.round(this.screenX / 2) - (this.SIZE / 2);
    this.floatY = Math.round(this.screenY / 2) - (this.SIZE / 2);
  }

  checkProximity() {
    const diffX = (this.floatX - this.mouseX);
    const diffY = (this.floatY - this.mouseY);
    var newX = this.floatX;
    var newY = this.floatY;
    if (diffX > this.DISTANCE) {
      newX = this.floatX - Math.round(Math.abs(diffX)/2);
    }
    if (diffX < -(this.DISTANCE)) {
      newX = this.floatX + Math.round(Math.abs(diffX)/2);
    }
    if (diffY > this.DISTANCE) {
      newY = this.floatY - Math.round(Math.abs(diffY)/2);
    }
    if (diffY < -(this.DISTANCE)) {
      newY = this.floatY + Math.round(Math.abs(diffY)/2);
    }
    if ((diffX > this.DISTANCE) || (diffX < -(this.DISTANCE))
      || (diffY > this.DISTANCE) || (diffY < -(this.DISTANCE))) {
        this.slideFloater(newX-50,newY-50);
      }
  }

  moveFloater() {
    var newX = this.getRandom() * (this.DISTANCE);
    var newY = this.getRandom() * (this.DISTANCE);
    if (this.getRandom() > 5) {
      newX = this.floatX + (this.getRandom() * (this.DISTANCE));
    } else {
      newX = this.floatX - (this.getRandom() * (this.DISTANCE));
    }
    if (this.getRandom() > 5) {
      newY = this.floatY + (this.getRandom() * (this.DISTANCE));
    } else {
      newY = this.floatY - (this.getRandom() * (this.DISTANCE));
    }

    if (newX < 1) { newX = 1 }
    if (newY < 1) { newY = 1 }
    if (newX > this.screenX) { newX = this.screenX }
    if (newY > this.screenY) { newY = this.screenY }
    if ((newX - this.mouseX) > this.DISTANCE) {
      newX = this.mouseX + this.DISTANCE
    }
    if ((newX - this.mouseX) < -(this.DISTANCE)) {
      newX = this.mouseX - this.DISTANCE
    }
    if ((newY - this.mouseY) > this.DISTANCE) {
      newY = this.mouseY + this.DISTANCE
    }
    if ((newY - this.mouseY) < -(this.DISTANCE)) {
      newY = this.mouseY - this.DISTANCE
    }


    this.slideFloater(newX-(this.SIZE / 2),newY-(this.SIZE / 2));
  }

  slideFloater(x,y) {
    x = Math.round(x);
    y = Math.round(y);
    this.nudgeFloater(x,y);
    clearTimeout(this.myTimer);
    if ((this.floatX != x) || (this.floatY != y)) {
      this.myTimer = setTimeout(() => {
        this.nudgeFloater(x,y);
        this.slideFloater(x,y);
      }, this.SPEED);
    }
  }

  nudgeFloater(x,y) {
    if (this.floatX < x) { this.floatX++ }
    if (this.floatX > x) { this.floatX-- }
    if (this.floatY < y) { this.floatY++ }
    if (this.floatY > y) { this.floatY-- }
  }

  wait(ms) {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
  }


}
