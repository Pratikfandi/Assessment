import { Component, OnInit, TemplateRef } from '@angular/core';
//import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


// export interface PeriodicElement {
//   Backlog: string;
//   Development: string;
//   codereview: string;
//   acceptence: string;
// }




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  taskForm: FormGroup;
  taskArray:any;
  taskdetail: any
  taskobj:{}


  ELEMENT_DATA: any
  Development = []
  codereview = []
  Acceptance = []
  display='none';

  constructor(
    private formBuilder: FormBuilder,private router: Router) {
    this.ELEMENT_DATA = []
 this.taskArray=[]
  }

  
    ngOnInit() {
      this.taskForm = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        duedate: ['', Validators.required]
      });
    }  
   get f() { return this.taskForm.controls; }

   onSubmit() {
    
   this.taskArray.push(this.taskForm.value)
   this.ELEMENT_DATA.push(this.taskForm.value.title)
     console.log("taskArray",this.taskArray)
     this.taskForm.reset()
    
   }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  openModal(template: TemplateRef<any>) {
    // this.modalRef = this.modalService.show(template);
   }
 

}
























//  datasource:MatTableDataSource<PeriodicElement>

//  ELEMENT_DATA:any
//   constructor(private router: Router,private taskservice: TaskserviceService)
//   {
//     this.gettaskdetail()
//     console.log("...................",this.dataSource.data)


//   }
//   displayedColumns: string[] = ['Backlogs', 'Development', 'Code Review', 'Acceptance'];
//   dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

//  //@ViewChild(MatSort) sort: MatSort;


//   ngOnInit() {
//   }

//   drop(event: CdkDragDrop<string[]>) {
//     moveItemInArray(this.ELEMENT_DATA, event.previousIndex, event.currentIndex);
//   }




//   addtask(){
//     console.log("add task function")
//     this.router.navigate(['/task'])
//   }

//   gettaskdetail(){
//     this.ELEMENT_DATA=this.taskservice.gettask()
//     console.log("taskelements",this.ELEMENT_DATA)
//   }
// }
