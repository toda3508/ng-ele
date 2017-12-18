import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  seller = {}; //header数据
  constructor() {
    axios.get('/api/getSeller')
      .then(res=>{ 
        this.seller = res.data.data;
      })
      .catch(error =>{
        console.log(error);
      });

    }
  ngOnInit() {
  }

}
