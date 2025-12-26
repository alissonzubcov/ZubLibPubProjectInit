import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZubSelectComponent } from './zub-select';

describe('ZubSelectComponent', () => {
  let component: ZubSelectComponent;
  let fixture: ComponentFixture<ZubSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZubSelectComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ZubSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit valueChange on onValueChange', () => {
    let emitted: any = null;
    component.valueChange.subscribe((v) => emitted = v);
    component.onValueChange('test');
    expect(component.value).toBe('test');
    expect(emitted).toBe('test');
  });

  it('should set isFocused on focus/blur', () => {
    component.onFocus();
    expect(component.isFocused).toBeTruthy();
    component.onBlur();
    expect(component.isFocused).toBeFalsy();
  });

  it('should return true for isEmpty when value is empty', () => {
    component.value = '';
    expect(component.isEmpty).toBeTruthy();
    component.value = undefined as any;
    expect(component.isEmpty).toBeTruthy();
    component.value = null as any;
    expect(component.isEmpty).toBeTruthy();
  });

  it('should return false for isEmpty when value is not empty', () => {
    component.value = 'abc';
    expect(component.isEmpty).toBeFalsy();
    component.value = 123;
    expect(component.isEmpty).toBeFalsy();
  });
});
