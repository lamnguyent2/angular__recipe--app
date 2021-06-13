import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ViewssComponent } from './viewss/viewss.component';
import { CreateComponent } from './admin/create/create.component';
import { EditComponent } from './admin/edit/edit.component';
import { CreatetaskComponent } from './admin/createtask/createtask.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProducttaskComponent } from './producttask/producttask.component';
import { EdittaskComponent } from './admin/edittask/edittask.component';
import { ActivesService as AuthGuard} from './services/actives.service';


const routes: Routes = [
    {path:'',component:HomeComponent, canActivate:[AuthGuard]},
    {path:'home',component:HomeComponent, canActivate:[AuthGuard]},
    {path:'bang-dieu-khien',component:HomeComponent, canActivate:[AuthGuard]},
    /* {path:'products',component:ProductlistComponent, canActivate:[AuthGuard]}, */
    {path:'gioi-thieu', loadChildren: ()=>import('./test/test.module').then(m=>m.TestModule)},
    {path:'products-task',component:ProducttaskComponent, canActivate:[AuthGuard]},
    {path:'products/createtask',component:CreatetaskComponent, canActivate:[AuthGuard]},
    {path:'products/edittask/:id',component:EdittaskComponent, canActivate:[AuthGuard]},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    /* {path:'gioi-thieu',component:ViewssComponent, canActivate:[AuthGuard]} */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
