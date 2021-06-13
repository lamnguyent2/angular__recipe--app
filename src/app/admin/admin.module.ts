import { Input, NgModule } from '@angular/core';

import { AppComponent } from '../app.component';
import { ProductlistComponent } from '../productlist/productlist.component';
import { CreateComponent } from '../admin/create/create.component';
import { EditComponent } from '../admin/edit/edit.component';
import { ProjectsService } from '../services/project/projects.service';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ProductlistComponent,
        CreateComponent,
        EditComponent
    ],
    imports: [
        AdminRoutingModule,
        SharedModule
    ],
    providers: [ProjectsService],
    bootstrap: [AppComponent]
})
export class AdminModule { }