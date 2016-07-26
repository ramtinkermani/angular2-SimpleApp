/**
 * Created by ramtinkermani on 7/25/16.
 */
import { Component } from "angular2/core"
import { IProduct } from "./product"
import { OnInit } from "angular2/src/core/linker/interfaces";
import {ProductFilterPipe} from "./product-filter.pipe";
import {StarComponent} from "../shared/star.component";
import {ProductService} from "./product.service";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    templateUrl: "app/products/product-list.component.html",
    styleUrls: ["app/products/product-list.component.css"],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 5;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService){

    }

    ngOnInit(): void {
        console.log("OnInit is called for Products!")
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error
            );
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message
    }
}