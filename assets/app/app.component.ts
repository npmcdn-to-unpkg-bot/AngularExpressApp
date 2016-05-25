import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComponent} from "./header.component";


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES,HeaderComponent]
})

@Routes([
    {
        path: '/',
        component: MessagesComponent
    },
    {
        path: '/auth',
        component: AuthenticationComponent

    }
])


export class AppComponent {

}