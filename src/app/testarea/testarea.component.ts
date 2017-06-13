import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-testarea',
  templateUrl: './testarea.component.html',
  styleUrls: ['./testarea.component.css']
})
export class TestareaComponent implements OnInit {
  mouseX: Number;
  mouseY: Number;
  screenX: Number;
  screenY: Number;
  floatX: Number;
  floatY: Number;
  DISTANCE: Number;

  constructor(private elRef:ElementRef) {
  }

  ngOnInit() {
    this.updateSize();
    this.initFloater();
  }

  updatePosition(event) {
    this.mouseX = event.offsetX;
    this.mouseY = event.offsetY;
    if (this.mouseX < 0) { this.mouseX = 0 }
    if (this.mouseY < 0) { this.mouseY = 0 }
    // console.log(event);
    this.checkProximity();
  }

  updateSize() {
    const boundaries = this.elRef.nativeElement.querySelector('.boundaries');
    this.screenX = boundaries.offsetWidth;
    this.screenY = boundaries.offsetHeight;
    this.initFloater();
    this.DISTANCE = Math.round(Number(this.screenX) / 10)
      + (Number(this.screenY) / 10);
    console.log(this.DISTANCE);
  }

  getRandom():number {
    return Math.round(Math.random() * 10);
  }

  initFloater() {
    this.floatX = Math.round(Number(this.screenX) / 2);
    this.floatY = Math.round(Number(this.screenY) / 2);
  }

  checkProximity() {
    const diffX = Number(this.floatX) - Number(this.mouseX);
    const diffY = Number(this.floatY) - Number(this.mouseY);
    if (diffX > this.DISTANCE) {
      this.floatX = Number(this.floatX) - Math.round(Math.abs(diffX)/2);
    }
    if (diffX < -(this.DISTANCE)) {
      this.floatX = Number(this.floatX) + Math.round(Math.abs(diffX)/2);
    }
    if (diffY > this.DISTANCE) {
      this.floatY = Number(this.floatY) - Math.round(Math.abs(diffY)/2);
    }
    if (diffY < -(this.DISTANCE)) {
      this.floatY = Number(this.floatY) + Math.round(Math.abs(diffY)/2);
    }

  }

  moveFloater() {
    var newX = Number(this.getRandom() * Number(this.DISTANCE));
    var newY = Number(this.getRandom() * Number(this.DISTANCE));
    if (this.getRandom() > 1) {
      newX += Number(this.floatX);
    } else {
      newX -= Number(this.floatX);
    }
    if (this.getRandom() > 1) {
      newY += Number(this.floatY);
    } else {
      newY -= Number(this.floatY);
    }

    if (newX < 1) { newX = 1 }
    if (newY < 1) { newY = 1 }
    if (newX > this.screenX) { newX = Number(this.screenX) }
    if (newY > this.screenY) { newY = Number(this.screenY) }
    this.floatX = newX;
    this.floatY = newY;
  }


}
