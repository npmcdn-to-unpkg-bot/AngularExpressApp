"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var message_1 = require("./message");
var message_service_1 = require("./message.service");
var MessageInputComponent = (function () {
    // Constructor to get the service - messageServices. This constructor gets an INSTANCE of
    // MessageService and bind it to the variable _messageService (Injected into THIS component)
    function MessageInputComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageInputComponent.prototype.onSubmit = function (form) {
        var message = new message_1.Message(form.content, null, 'Andrew Dong');
        this._messageService.addMessage(message);
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'message-input-component',
            templateUrl: 'message-input.component.html',
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBVWpEO0lBRUkseUZBQXlGO0lBQ3pGLDRGQUE0RjtJQUM1RiwrQkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBRW5ELENBQUM7SUFFRCx3Q0FBUSxHQUFSLFVBQVMsSUFBUTtRQUNiLElBQU0sT0FBTyxHQUFZLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxhQUFhLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBbkJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFdBQVcsRUFBRSw4QkFBOEI7U0FHOUMsQ0FBQzs7NkJBQUE7SUFjRiw0QkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksNkJBQXFCLHdCQVlqQyxDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcclxuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ21lc3NhZ2UtaW5wdXQtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnbWVzc2FnZS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcblxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnR7XHJcblxyXG4gICAgLy8gQ29uc3RydWN0b3IgdG8gZ2V0IHRoZSBzZXJ2aWNlIC0gbWVzc2FnZVNlcnZpY2VzLiBUaGlzIGNvbnN0cnVjdG9yIGdldHMgYW4gSU5TVEFOQ0Ugb2ZcclxuICAgIC8vIE1lc3NhZ2VTZXJ2aWNlIGFuZCBiaW5kIGl0IHRvIHRoZSB2YXJpYWJsZSBfbWVzc2FnZVNlcnZpY2UgKEluamVjdGVkIGludG8gVEhJUyBjb21wb25lbnQpXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2Upe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtOmFueSl7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKGZvcm0uY29udGVudCxudWxsLCdBbmRyZXcgRG9uZycpO1xyXG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
