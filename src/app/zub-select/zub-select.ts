import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZubSelectOption } from './zub-select-options.interface';

@Component({
  selector: 'zub-select',
  standalone: true,
  templateUrl: './zub-select.html',
  styleUrl: './zub-select.scss',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ZubSelectComponent {
  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() error?: string;
  @Input() ariaLabel?: string;
  @Input() options: Array<ZubSelectOption> = [];
  @Input() value: string | number = '';
  @Output() valueChange = new EventEmitter<string | number>();

  selectId = 'zub-select-' + Math.random().toString(36).substring(2, 9);
  isFocused = false;

  get isEmpty() {
    return this.value === '' || this.value === undefined || this.value === null;
  }

  onValueChange(val: string | number) {
    this.value = val;
    this.valueChange.emit(val);
  }
  onFocus() {
    this.isFocused = true;
  }
  onBlur() {
    this.isFocused = false;
  }
}
