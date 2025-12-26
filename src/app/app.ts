import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZubSelectComponent } from './zub-select/zub-select';
import { ZubSwtichComponent } from './zub-swtich/zub-swtich';

@Component({
  selector: 'app-root',
  imports: [ZubSwtichComponent, ZubSelectComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  value: boolean = false;

  switchDisabled: boolean = false;
  selectDisabled: boolean = false;

  formGroup!: FormGroup;

  selectOptions = [
    { label: 'Opção 1', value: '1', disabled: true },
    { label: 'Opção 2', value: '2' },
    { label: 'Opção 3', value: '3' },
    { label: 'Opção 4', value: '4' }
  ];
  selectedValue: string = '';
  selectError: string = '';

  selectLabel = 'Selecione uma opção';
  selectPlaceholder = 'Escolha uma opção...';
  optionsText = 'Opção 1\nOpção 2\nOpção 3:disabled\nOpção 4';
  selectedValueDemo = '';
  selectOptionsDemo: any[] = [];

  constructor() {
    this.updateSelectOptionsDemo();
  }

  updateSelectOptionsDemo() {
    this.selectOptionsDemo = this.optionsText.split(/\r?\n/).filter(l => l.trim()).map((line, idx) => {
      const [label, flag] = line.split(':');
      return {
        value: label.trim(),
        label: label.trim(),
        disabled: flag && flag.trim() === 'disabled' ? true : undefined
      };
    });
  }

  onOptionsTextChange() {
    this.updateSelectOptionsDemo();
  }

}
