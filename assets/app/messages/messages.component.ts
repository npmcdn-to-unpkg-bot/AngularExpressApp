import {Component} from '@angular/core';
import {MessageInputComponent} from "./message-input.component";
import {MessageListComponent} from "./message-list.component";

@Component({
    moduleId: module.id,
    selector: 'messages-component',
    templateUrl: 'messages.component.html',
    directives: [MessageListComponent, MessageInputComponent]

})

export class MessagesComponent{
    
}