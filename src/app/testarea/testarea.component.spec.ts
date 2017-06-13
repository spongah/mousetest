import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestareaComponent } from './testarea.component';

describe('TestareaComponent', () => {
  let component: TestareaComponent;
  let fixture: ComponentFixture<TestareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
