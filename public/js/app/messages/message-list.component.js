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
var message_component_1 = require("./message.component");
var message_1 = require("./message");
var MessageListComponent = (function () {
    function MessageListComponent() {
        this.messages = [
            new message_1.Message('Testing a new message?', null, 'Andrew Dong'),
            new message_1.Message('A really new Message!', null, 'Andrew Dong # 2')
        ];
    }
    MessageListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'message-list-component',
            templateUrl: 'message-list.component.html',
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFVbEM7SUFBQTtRQUNJLGFBQVEsR0FBYztZQUNsQixJQUFJLGlCQUFPLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFHLGFBQWEsQ0FBQztZQUMzRCxJQUFJLGlCQUFPLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixDQUFDO1NBQ2hFLENBQUM7SUFDTixDQUFDO0lBYkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztTQUNqQyxDQUFDOzs0QkFBQTtJQVFGLDJCQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSw0QkFBb0IsdUJBS2hDLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbWVzc2FnZS1saXN0LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ21lc3NhZ2UtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUxpc3RDb21wb25lbnR7XHJcbiAgICBtZXNzYWdlczogTWVzc2FnZVtdID0gW1xyXG4gICAgICAgIG5ldyBNZXNzYWdlKCdUZXN0aW5nIGEgbmV3IG1lc3NhZ2U/JywgbnVsbCAsICdBbmRyZXcgRG9uZycpLFxyXG4gICAgICAgIG5ldyBNZXNzYWdlKCdBIHJlYWxseSBuZXcgTWVzc2FnZSEnLCBudWxsLCAnQW5kcmV3IERvbmcgIyAyJylcclxuICAgIF07XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
