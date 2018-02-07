import { Unicorn } from '../app.component'
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unicorn-detail',
  templateUrl: './unicorn-detail.component.html',
  styleUrls: ['./unicorn-detail.component.css']
})
export class UnicornDetailComponent implements OnInit {

  @Input()
  unicorn: Unicorn
  constructor() { }

  ngOnInit() {
  }

}
