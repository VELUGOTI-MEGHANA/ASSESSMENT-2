import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOwneridComponent } from './update-ownerid.component';

describe('UpdateOwneridComponent', () => {
  let component: UpdateOwneridComponent;
  let fixture: ComponentFixture<UpdateOwneridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOwneridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOwneridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
