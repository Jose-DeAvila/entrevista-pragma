import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Output() inputChange = new EventEmitter(false);
  @Input() placeholder: string;
  @Input() type = 'text';
  @Input() iconName: string;
  @Input() name: string;
  @Input() regex: string;
  inputValue: string;
  hasErrors = false;

  constructor() { }

  onInputChange = (e) => {
    const regexp = new RegExp(this.regex);
    const isCorrect = regexp.test(e.target.value);
    if(isCorrect) {
      this.inputValue = e.target.value;
      this.hasErrors = false;
      this.inputChange.emit({ text: e.target.value });
    }
    else {
      this.hasErrors = true;
    }
  };

  ngOnInit() { }

}
