/**
 * Created by ramtinkermani on 7/25/16.
 */
import { Component } from "angular2/core";
import {ProductListComponent} from "./products/product-list.component";

@Component({
    selector: "pm-app",
    template:
        `
        <div>
            <h1> {{ pageTitle }} </h1>
            <div> My first Component Yo!!!!!</div>
            
            <pm-products> </pm-products>
        </div>   
    `,
    directives: [ProductListComponent]
})
export class AppComponent {
    pageTitle: string = "Title: My first Angular2 Component"
}