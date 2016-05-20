import {Component, OnInit} from '@angular/core';
import {MessageComponent} from "./message.component";
import {Message} from "./message";
import {MessageService} from "./message.service";

@Component({
    moduleId: module.id,
    selector: 'message-list-component',
    templateUrl: 'message-list.component.html',
    directives: [MessageComponent],
})

// On initialization use the NgOnInit method
export class MessageListComponent implements OnInit{

    constructor(private _messageService: MessageService){}

    messages: Message[] = [];

    ngOnInit(){
        this.messages = this._messageService.getMessages();
    }
}