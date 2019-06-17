import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsModule } from './posts/posts.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { 
    path: '',
    loadChildren: './posts/posts.module#PostsModule'
  },
  { 
    path: 'categories',
    loadChildren: './categories/categories.module#CategoriesModule'
  },  
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    PostsModule
  ],
  exports: [
      RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
