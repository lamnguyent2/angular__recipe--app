import { Component, OnInit } from '@angular/core';
import { Userz } from '../interface/users';
import { Taskz } from '../interface/tasks';
import { Groupz } from '../interface/teams';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UsersService } from '../services/user/users.service';
import { ProjectsService } from '../services/project/projects.service';
import { Projectz } from '../interface/projects';
import { TasksService } from '../services/task/tasks.service';
import { TeamsService } from '../services/team/teams.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers:[UsersService,TasksService,ProjectsService,TeamsService]
})
export class HomeComponent implements OnInit {
    teamzz:Groupz[]=[];
    wests:Userz[]=[];
    westz:Userz[]=[];
    easts:Userz[]=[];
    eastz:Userz[]=[];
    souths:Userz[]=[];
    southz:Userz[]=[];
    norths:Userz[]=[];
    northz:Userz[]=[];
    userzz:Userz[]=[];
    userzzzzzzzz:Userz[]=[];
    taskzz:Taskz[]=[];
    projectzz:Projectz[]=[];
    total:any;
    totalRecords:any;
    totalRecords1:any;
    totalRecords2:any;
    totalRecords3:any;
    data:any;
    datas:any;
    page:any=1;
    page1:any=1;
    page2:any=1;
    page3:any=1;
    constructor(
        private teamss: TeamsService,
        private teams: UsersService, 
        private tasks: TasksService, 
        private projects: ProjectsService, 
        private router: Router, 
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        console.log(localStorage.getItem('Users'));
        this.data = localStorage.getItem('Users');
        this.datas = JSON.parse(this.data);
        if(this.datas){
            this.teams.getUsersss(this.datas).subscribe((data)=>{
                this.userzz=data;    
            }); 
        }

        this.teamss.getTeams().subscribe((data)=>{
            this.teamzz=data;           
        });

        this.projects.getProject().subscribe((data)=>{
            this.projectzz=data.length;           
        });
        this.tasks.getTask().subscribe((data)=>{
            this.taskzz=data.length;
        });
        this.teams.getUser().subscribe((data)=>{
            this.userzzzzzzzz=data.length;         
        });
        this.teams.getWest().subscribe((data)=>{
            console.log('West',data);
            this.wests=data;
            this.westz=data.length;   
            this.totalRecords1 = data.length;      
        });
        this.teams.getEast().subscribe((data)=>{
            console.log('East',data);
            this.easts=data;
            this.eastz=data.length;  
            this.totalRecords = data.length;      
        });
        this.teams.getNorth().subscribe((data)=>{
            console.log('North',data);
            this.norths=data;
            this.northz=data.length;   
            this.totalRecords3 = data.length;        
        });
        this.teams.getSouth().subscribe((data)=>{
            console.log('South',data);
            this.souths=data;
            this.southz=data.length;  
            this.totalRecords2 = data.length;         
        });
    }
}
