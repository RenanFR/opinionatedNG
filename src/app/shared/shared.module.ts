import { NgModule } from "@angular/core";
import { MessageCardsModule } from "./messages/message.cards.module";
import { CommonModule } from "@angular/common";
import { KeysPipe } from "./keys.pipe";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestInterceptor } from "./request.interceptor";
import { TokenService } from './token.service';
import { ProgressLoaderService } from './progress.loader.service';
import { LoaderComponent } from './loader.component';

@NgModule({
    imports: [
        CommonModule,
        MessageCardsModule
    ],
    declarations:[
        KeysPipe,
        LoaderComponent
    ],
    exports:[
        MessageCardsModule,
        LoaderComponent,
        KeysPipe
    ],
    providers: [
        ProgressLoaderService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class SharedModule {}