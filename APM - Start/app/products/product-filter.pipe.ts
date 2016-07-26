/**
 * Created by rkermani on 7/25/2016.
 */
import {PipeTransform} from "angular2/src/core/change_detection/pipe_transform";
import {IProduct} from "./product";
import {Pipe} from "angular2/src/core/metadata";

@Pipe({
    name: "productFilter"
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], args: string[]): IProduct[]
    {
        let filter: string = args[0]? args[0].toLocaleLowerCase(): null;
        return filter ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filter) != -1): value;
        )
    }
}