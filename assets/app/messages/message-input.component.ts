import {Component} from '@angular/core';
import {Message} from "./message";
import {MessageService} from "./message.service";

@Component({
    moduleId: module.id,
    selector: 'message-input-component',
    templateUrl: 'message-input.component.html',


})

export class MessageInputComponent{

    // Constructor to get the service - messageServices. This constructor gets an INSTANCE of
    // MessageService and bind it to the variable _messageService (Injected into THIS component)
    constructor(private _messageService: MessageService){

    }

    onSubmit(form:any){
        const message: Message = new Message(form.content,null,'Andrew Dong');
        this._messageService.addMessage(message);
    }
}