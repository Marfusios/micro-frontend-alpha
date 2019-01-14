import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  message: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.message = 'Has been submitted';
  }

  onCancel() {
    this.message = 'Has been cancelled';
  }

}
