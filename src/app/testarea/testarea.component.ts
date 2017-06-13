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
  floatY : Number;

  constructor() { }

  ngOnInit() {
    this.updateSize();
  }

  updatePosition(event) {
    this.mouseX = event.offsetX;
    this.mouseY = event.offsetY;
    if (this.mouseX < 0) { this.mouseX = 0 }
    if (this.mouseY < 0) { this.mouseY = 0 }
    // console.log(event);
  }

  updateSize() {
    this.screenX = window.innerWidth;
    this.screenY = window.innerHeight;

  }

  moveFloater() {
    var r = Math.round((Math.random() * 10) * (Math.random() * 10));
    var newX = r*10
    r = Math.round((Math.random() * 10) * (Math.random() * 10));
    var newY = r*10
    console.log(newX + ',' + newY);
    this.floatX = newX;
    this.floatY = newY;
  }


}
