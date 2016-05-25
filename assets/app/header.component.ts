import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'header-component',
    templateUrl: `header.component.html`,
    directives: [ROUTER_DIRECTIVES],
    styleUrls: [`header.component.css`]
})
export class HeaderComponent {
    
}