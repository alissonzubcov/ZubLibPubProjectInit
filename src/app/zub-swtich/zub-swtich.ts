import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'zub-swtich',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './zub-swtich.html',
  styleUrls: ['./zub-swtich.scss'],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZubSwtichComponent),
      multi: true
    }
  ]
})
export class ZubSwtichComponent implements ControlValueAccessor {
  @Input() formControlName!: string;
  @Input() ariaLabel: string = 'Alternar modo';
  isFocused = false;
  @Input() set disabled(value: boolean) {
    this._disabled = value;
  }
  onChange: any = () => { };
  onTouched: any = () => { };
  value!: boolean;
  _disabled: boolean = false;
  onKeydown(event: KeyboardEvent) {
    if (this._disabled) return;
    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault();
      this.value = !this.value;
      this.onChange(this.value);
      this.onTouched();
    }
  }
  writeValue(value: any): void {
    this.value = !!value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  onToggle(event: Event) {
    if (this._disabled) return;
    const input = event.target as HTMLInputElement;
    this.value = input.checked;
    this.onChange(this.value);
    this.onTouched();
  }
  onFocus() {
    this.isFocused = true;
  }
  onBlur() {
    this.isFocused = false;
    this.onTouched();
  }
}

