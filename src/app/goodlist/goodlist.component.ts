import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-goodlist',
  templateUrl: './goodlist.component.html',
  styleUrls: ['./goodlist.component.scss']
})
export class GoodlistComponent implements OnInit {
  @Input() foods:any;
  constructor() { }

  ngOnInit() {
    console.log(this.foods)
  }

}
