/**
 * Created by ramtinkermani on 7/25/16.
 */
import { Component } from "angular2/core";
import { ProductListComponent } from "./products/product-list.component";
import { OnInit } from "angular2/src/core/linker/interfaces";
import { ProductService } from "./products/product.service";

@Component({
    selector: "pm-app",
    template:
        `
        <div>
            <h3> {{ pageTitle }} </h3>
            <div> My first Component Yo!!!!!</div>
            
            <pm-products> </pm-products>
        </div>   
        `
    ,
    directives: [ProductListComponent],
    providers: [ProductService]
})
export class AppComponent implements OnInit{
    pageTitle: string = "Title: My first Angular2 Component"
    ngOnInit(): void {
        console.log("OnInit is called for Application!")
    }
}