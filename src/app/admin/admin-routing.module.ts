import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from '../productlist/productlist.component';
import { CreateComponent } from '../admin/create/create.component';
import { EditComponent } from '../admin/edit/edit.component';
import { ActivesService as AuthGuard} from '../services/actives.service';


const routes: Routes = [
    {path:'products',component:ProductlistComponent, canActivate:[AuthGuard]},
    {path:'products', children:[    
        {path:'createproject',component:CreateComponent, canActivate:[AuthGuard]},
        {path:'edit/:id',component:EditComponent, canActivate:[AuthGuard]}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }