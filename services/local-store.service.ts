import { LocalStoreInterface } from './local-store.service.in';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { _throw as ObservableThrow } from 'rxjs/observable/throw';

@Injectable()
export class LocalStoreService implements LocalStoreInterface {
    /**
     * @param key 
     * Gets the value from localstorage for the given key
     * @returns Observable<string>
     */
    get(key: string) : Observable<string> {
        return Observable.of(localStorage.getItem(key));
    }

    /**
     * @param key 
     * @param value 
     * Takes the value
     * converts to string 
     * stores in the given localstorage key
     * @returns Observable<boolean>
     */
    set(key: string, value: any) {
        if (typeof value === 'object') {
            // remove null values
            try {
                value = value.filter(x => x != null);
                value = JSON.stringify(value);
            } catch (err) {}
        }

        localStorage.setItem(key, value);
        
        return Observable.of(true);
    }

    /**
     * @param key 
     * Gets the value from localstorage for the given key
     * @returns Observable<object> on success
     * @throws Observable Throw on exceptions
     */
    asObject(key: string) : Observable<object> {
        const data = localStorage.getItem(key);
        let obj : any = {};

        if (data === null) {
            return ObservableThrow('Data not found in storage.');
        }

        try {
            obj = JSON.parse(data);
        } catch(err) {
            return ObservableThrow('Trying to parse invalid JSON.');
        }

        return Observable.of(obj);
    }
    
    /**
     * @param key 
     * Removes the value from localstorage for the given key
     * @returns Observable<boolean>
     */
    remove(key: string) {
        localStorage.removeItem(key);
        return Observable.of(true);
    }
}
