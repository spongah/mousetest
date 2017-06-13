import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testarea',
  templateUrl: './testarea.component.html',
  styleUrls: ['./testarea.component.css']
})
export class TestareaComponent implements OnInit {
  mouseX : Number;
  mouseY : Number;
  screenX : Number;
  screenY : Number;
  floatX : Number;
  floadY : Number;

  constructor() { }

  ngOnInit() {
    this.updateSize();
  }

  updatePosition(event) {
    this.mouseX = event.offsetX;
    this.mouseY = event.offsetY;
    // console.log(event);
  }

  updateSize() {
    this.screenX = window.innerWidth;
    this.screenY = window.innerHeight;
  }

  checkProximity() {
    var r = Math.round(Math.random() * 10);
    console.log(r);
  }

  moveFloater(x:Number, y:Number) {
  }

}
