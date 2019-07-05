import { NgModule, ErrorHandler } from "@angular/core";
import { MessageCardsModule } from "./messages/message.cards.module";
import { CommonModule } from "@angular/common";
import { KeysPipe } from "./keys.pipe";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestInterceptor } from "./request.interceptor";
import { ProgressLoaderService } from './progress.loader.service';
import { LoaderComponent } from './loader.component';
import { GlobalErrorHandler } from './global.error.handler';
import { NotificationComponent } from './notification.component';
import { NotificationService } from './notification.service';

@NgModule({
    imports: [
        CommonModule,
        MessageCardsModule
    ],
    declarations:[
        KeysPipe,
        NotificationComponent,
        LoaderComponent
    ],
    exports:[
        MessageCardsModule,
        NotificationComponent,
        LoaderComponent,
        KeysPipe
    ],
    providers: [
        ProgressLoaderService,
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandler
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class SharedModule {}