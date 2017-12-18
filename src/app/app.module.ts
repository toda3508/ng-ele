import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';  //引入路由
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GoodsComponent } from './goods/goods.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ShopsComponent } from './shops/shops.component';
import { GoodlistComponent } from './goodlist/goodlist.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';



export const ROUTES: Routes = [    
  { path: '', component: GoodsComponent },   //默认显示
  { path: 'ratings', component: RatingsComponent },   
  { path: 'shops', component: ShopsComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoodsComponent,
    RatingsComponent,
    ShopsComponent,
    GoodlistComponent,
    FooterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
