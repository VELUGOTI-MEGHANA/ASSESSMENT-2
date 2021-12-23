import { ComponentFixture, TestBed } from '@angular/core/testing';
import { delettaskcomponent } from './deletetask.component';

describe('DeletetaskcomponentComponent', () => {
  let component:  delettaskcomponent;
  let fixture: ComponentFixture<delettaskcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  delettaskcomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( delettaskcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
