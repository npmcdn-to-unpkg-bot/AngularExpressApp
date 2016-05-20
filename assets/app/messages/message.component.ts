import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Message} from "./message";
import {MessageService} from "./message.service";

@Component({
    moduleId: module.id,
    selector: 'the-message-component',
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.css']
})

export class MessageComponent{
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private _messageService: MessageService){}

    onEdit(){
        this._messageService.editMessage(this.message);
    }

    onDelete(){
        this._messageService.deleteMessage(this.message);
    }
}