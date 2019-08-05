import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { LoginModule } from './login/login.module';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {

  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");

}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CategoriesModule,
    PostsModule,
    LoginModule,
    SharedModule,
    AppRoutingModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [ HttpClient ]
        }
    }),
  ],
  exports: [
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
