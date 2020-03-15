import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataAccessOptions } from './data-access.options';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DataAccessModule {

  constructor (@Optional() @SkipSelf() parentModule?: DataAccessModule) {
    if (parentModule) {
      throw new Error(
        'DataAccessModule is already loaded. Import it in the AppModule only');
    }
  }  

  static forRoot(options: DataAccessOptions): ModuleWithProviders {
    return {
      ngModule: DataAccessModule,
      providers: [
        { provide: DataAccessOptions, useValue: options },
      ],
    };
  }

}
