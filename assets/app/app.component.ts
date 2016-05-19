import { Component } from '@angular/core';
import {MessageListComponent} from "./messages/message-list.component";


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [MessageListComponent]
})
export class AppComponent {

}