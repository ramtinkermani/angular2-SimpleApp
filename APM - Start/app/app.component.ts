/**
 * Created by ramtinkermani on 7/25/16.
 */
import { Component } from "angular2/core";
import { ProductListComponent } from "./products/product-list.component";
import {WelcomeComponent} from "./home/welcome.component";

import { OnInit } from "angular2/src/core/linker/interfaces";
import { ProductService } from "./products/product.service";
import {HTTP_PROVIDERS} from "angular2/http";
import "rxjs/Rx";
import {ROUTER_PROVIDERS} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {ProductDetailComponent} from "./products/product-detail.component";

@RouteConfig([
    { path: "/welcome", name: "Welcome", component: WelcomeComponent, useAsDefault: true},
    { path: "/products", name: "Products", component: ProductListComponent},
    { path: "/products/:id", name: "ProductDetail", component: ProductDetailComponent}
])
@Component({
    selector: "pm-app",
    template:
        `
        <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <a class="navbar-brand">{{pageTitle}}</a>
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['Welcome']">Home</a></li>
                        <li><a [routerLink]="['Products']">Product List</a></li>
                    </ul>
                </div>
            </nav>
        </div>  
        <div class="container">
            <router-outlet></router-outlet>    
        </div>
        
        `
    ,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
 export class AppComponent implements OnInit{
    pageTitle: string = "Title: My first Angular2 Component"
    ngOnInit(): void {
        console.log("OnInit is called for Application!")
    }
}





















