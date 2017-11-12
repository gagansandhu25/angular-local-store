import { Observable } from 'rxjs/Observable';
export interface LocalStoreInterface {
    get(key : string) : Observable<string>;
    set(key : string, value : any) : Observable<boolean>;
    asObject(key : string) : Observable<object>;
    remove(key : string) : Observable<boolean>;
}