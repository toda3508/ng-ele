import { Component, OnInit,ElementRef, ViewChild,ViewChildren, AfterViewInit, Renderer} from '@angular/core';
import axios from 'axios';
import BScroll from 'better-scroll/src/index.js';
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  @ViewChild('menu')
  menu: ElementRef;
  @ViewChild('foodsWrapper')
  foodsWrapper: ElementRef;
  navData = [];
  flag = 0;
  isclick = false; //点击标记
  listHieght = [];  //记录div商品的高度scroll点
  menuScroll:any ;
  foodsScroll;
  testFather:any = "我是父组件传来的参数哦";
  constructor() { 
    axios
      .get('/api/getGoods')
      .then(res => {
        this.navData = res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
  ngOnInit() {
  }
  ngAfterViewInit(){
   
    setTimeout(()=>{
      //  添加每一个div的高度到数组中
      let foodList = this.foodsWrapper.nativeElement.getElementsByClassName('food-list-hook')
      let height = 0;
      this.listHieght.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHieght.push(height)
      }
      this.menuScroll = new BScroll(this.menu.nativeElement, {
        click:true,
      }) 
      this.foodsScroll =  new BScroll(this.foodsWrapper.nativeElement, {
        click:true,
        probeType: 3
      })
        // 滚动右边联动左边
     this.foodsScroll.on('scroll', (pos) => {
      if(this.isclick){
        return;
      }
      let scrollY = Math.abs(pos.y);
      for(var i = 0; i< this.listHieght.length; i++){
        if(scrollY <=this.listHieght[i+1] && scrollY>this.listHieght[i]){
          this.flag = i;
        }
      }
    })
   
    },0)
      
  }
  // 左侧点击事件
  lefTouch(index){
    
    this.flag = index;
    this.isclick = true;
    // 点击左侧菜单右侧滚动到对应的标题
    this.foodsScroll.scrollToElement(this.foodsWrapper.nativeElement.getElementsByClassName('food-list-hook')[index], 300);
 }
 cancelCli(){
  this.isclick = false;

}

  

}
