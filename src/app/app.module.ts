import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { SortPipe } from './app.sort';


@NgModule({
  declarations: [
      SortPipe,
    AppComponent,
    ProductComponent,
    MembersComponent,
    MyComponentComponent,
  ],
  imports: [
    BrowserModule,
      ReactiveFormsModule,
      HttpModule,
    RouterModule.forRoot([
      {
        path: 'member',
        component: MembersComponent
      },
      {
        path: 'product',
        component: ProductComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
