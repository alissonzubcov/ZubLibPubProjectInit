import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZubSwtichComponent } from './zub-swtich';

describe('ZubSwtichComponent', () => {
  let component: ZubSwtichComponent;
  let fixture: ComponentFixture<ZubSwtichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZubSwtichComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ZubSwtichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle value on onToggle', () => {
    component.value = false;
    const event = { target: { checked: true } } as any;
    component.onToggle(event);
    expect(component.value).toBe(true);
  });

  it('should call onChange and onTouched on onToggle', () => {
    let changedValue: any = null;
    let touchedCalled = false;
    component.onChange = (v: any) => { changedValue = v; };
    component.onTouched = () => { touchedCalled = true; };
    const event = { target: { checked: true } } as any;
    component.onToggle(event);
    expect(changedValue).toBe(true);
    expect(touchedCalled).toBeTruthy();
  });

  it('should set value with writeValue', () => {
    component.writeValue(true);
    expect(component.value).toBe(true);
    component.writeValue(false);
    expect(component.value).toBe(false);
  });

  it('should set isFocused on focus/blur', () => {
    component.onFocus();
    expect(component.isFocused).toBeTruthy();
    component.onBlur();
    expect(component.isFocused).toBeFalsy();
  });

  it('should not toggle if disabled', () => {
    component._disabled = true;
    component.value = false;
    const event = { target: { checked: true } } as any;
    component.onToggle(event);
    expect(component.value).toBe(false);
  });
});
