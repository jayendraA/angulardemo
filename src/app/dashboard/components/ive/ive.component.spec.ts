import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IveComponent } from './ive.component';

describe('IveComponent', () => {
  let component: IveComponent;
  let fixture: ComponentFixture<IveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
