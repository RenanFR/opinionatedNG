import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorMessageComponent } from "./error.message.component";

@NgModule({
    declarations: [
        ErrorMessageComponent
    ],
    exports: [
        ErrorMessageComponent
    ]
})
export class MessageCardsModule {}