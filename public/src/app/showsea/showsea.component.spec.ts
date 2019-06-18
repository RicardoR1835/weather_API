import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowseaComponent } from './showsea.component';

describe('ShowseaComponent', () => {
  let component: ShowseaComponent;
  let fixture: ComponentFixture<ShowseaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowseaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowseaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
