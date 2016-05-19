import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Message} from "./message";
import {EventEmitter} from "../../../public/js/vendor/@angular/common/esm/src/facade/async";

@Component({
    moduleId: module.id,
    selector: 'the-message-component',
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.css']
})

export class MessageComponent{
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    onClick(){
        this.editClicked.emit('changed');
    }
}