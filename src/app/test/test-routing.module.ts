import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewssComponent } from '../viewss/viewss.component';
import { TestComponent } from './test.component';
import { ActivesService as AuthGuard} from '../services/actives.service';


const routes: Routes = [
    {path:'',component:ViewssComponent, canActivate:[AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestRoutingModule { }