import {Component} from '@angular/core';
import {MessageComponent} from "./message.component";
import {Message} from "./message";

@Component({
    moduleId: module.id,
    selector: 'message-list-component',
    templateUrl: 'message-list.component.html',
    directives: [MessageComponent]
})


export class MessageListComponent{
    messages: Message[] = [
        new Message('Testing a new message?', null , 'Andrew Dong'),
        new Message('A really new Message!', null, 'Andrew Dong # 2')
    ];
}