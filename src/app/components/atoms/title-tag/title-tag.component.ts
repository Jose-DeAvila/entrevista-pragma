import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-tag',
  templateUrl: './title-tag.component.html',
  styleUrls: ['./title-tag.component.scss'],
})
export class TitleTagComponent implements OnInit {

  @Input() background: string;

  constructor() { }

  ngOnInit() {}

}
