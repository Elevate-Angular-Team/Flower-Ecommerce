import { Observable } from "rxjs";

export abstract class HomeApi {
    abstract categories (data:any) :Observable<any>

}