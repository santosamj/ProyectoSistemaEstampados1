import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevolucionComponent } from './devolucion.component';

describe('DevolucionComponent', () => {
  let component: DevolucionComponent;
  let fixture: ComponentFixture<DevolucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevolucionComponent]
    });
    fixture = TestBed.createComponent(DevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
