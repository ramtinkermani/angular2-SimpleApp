import {IProduct} from "./product";
import {Injectable} from "angular2/src/core/di/decorators";
import { Http, Response } from "angular2/http";
import { Observable } from "rxjs/Observable";
/**
 * Created by ramtinkermani on 7/25/16.
 */

@Injectable()
export class ProductService {
    private _productUrl = "/api/products/products.json";
    constructor(private _http: Http){}

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response){
        return Observable.throw(error.json().error || 'Server Error!')
    }
}