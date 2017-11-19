import { LocalStoreService } from './services/local-store.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [],
    exports: []
})
export class LocalStoreModule {
    static forRoot() {
        return {
          ngModule: LocalStoreModule,
          providers: [ LocalStoreService ]
        }
    }
}

