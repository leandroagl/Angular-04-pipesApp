import { NgModule } from '@angular/core';

// PrimeNg
import {ButtonModule}   from 'primeng/button';
import {CardModule}     from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule}  from 'primeng/menubar';
import {RippleModule}   from 'primeng/ripple';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';



@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    RippleModule,
    ToolbarModule,
    TableModule
  ],
})
export class PrimeNgModule { }
