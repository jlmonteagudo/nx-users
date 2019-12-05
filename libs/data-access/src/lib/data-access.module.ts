import { NgModule, ModuleWithProviders } from '@angular/core';
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

  static forRoot(options?: DataAccessOptions) {
    return <ModuleWithProviders> {
      ngModule: DataAccessModule,
      providers: [
        { provide: DataAccessOptions, useValue: options || {} },
      ],
    };
  }

}
