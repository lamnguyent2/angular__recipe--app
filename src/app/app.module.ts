import { Input, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ViewssComponent } from './viewss/viewss.component';
import { FooterComponent } from './footer/footer.component';
import { CreatetaskComponent } from './admin/createtask/createtask.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProducttaskComponent } from './producttask/producttask.component';
import { ProjectsService } from './services/project/projects.service';
import { EdittaskComponent } from './admin/edittask/edittask.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ViewssComponent,
        FooterComponent,
        CreatetaskComponent,
        LoginComponent,
        RegisterComponent,
        ProducttaskComponent,
        EdittaskComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        AdminModule,
        AdminRoutingModule
        
    ],
    
    providers: [ProjectsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
