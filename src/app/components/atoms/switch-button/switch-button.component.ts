import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss'],
})
export class SwitchButtonComponent implements OnInit {

  @Output() checkChanged = new EventEmitter(false);
  @Input() text: string;
  @Input() name: string;

  constructor() { }

  onChange(e) {
    this.checkChanged.emit({ isChecked: e.currentTarget.checked });
  };

  ngOnInit() {}

}
