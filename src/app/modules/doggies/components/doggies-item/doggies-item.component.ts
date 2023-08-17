import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doggies-item',
  templateUrl: './doggies-item.component.html',
  styleUrls: ['./doggies-item.component.scss']
})
export class DoggiesItemComponent implements OnInit {
  
  @Input() doggie: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
