import {Component} from "angular2/src/core/metadata";
import {RouteParams, Router} from "angular2/router";
/**
 * Created by rkermani on 7/26/2016.
 */

@Component({
    templateUrl: "app/products/product-detail.component.html"
})
export class ProductDetailComponent {
    pageTitle: string = "Product Detail";

    constructor(private _routeParams: RouteParams,
                private _router: Router){
        let id = +this._routeParams.get('id');
        this.pageTitle += `: ${id} `
    }

    onBack(): void {
        this._router.navigate(['Products'])
    }
}