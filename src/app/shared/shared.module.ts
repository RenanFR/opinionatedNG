import { NgModule } from "@angular/core";
import { MessageCardsModule } from "./messages/message.cards.module";
import { CommonModule } from "@angular/common";
import { KeysPipe } from "./keys.pipe";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestInterceptor } from "./request.interceptor";

@NgModule({
    imports: [
        CommonModule,
        MessageCardsModule
    ],
    declarations:[
        KeysPipe
    ],
    exports:[
        MessageCardsModule,
        KeysPipe
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class SharedModule {}