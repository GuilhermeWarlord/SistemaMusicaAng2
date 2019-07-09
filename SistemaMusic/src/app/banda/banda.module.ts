import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { bandaRouting } from './banda.routing';
import { BandaListComponent } from './banda-list/banda-list.component';
import { BandaCrudComponent } from './banda-crud/banda-crud.component';
import { BandaFormComponent } from './banda-form/banda-form.component';
import { BandaService } from './banda.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,bandaRouting,FormsModule
  ],
  declarations: [BandaListComponent, BandaFormComponent, BandaCrudComponent, FilterPipe, BandaListComponent, BandaCrudComponent, BandaFormComponent],
  providers: [BandaService]
})
export class BandaModule { }
