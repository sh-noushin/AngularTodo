import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog , MatDialogConfig} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { TodoitemService } from 'src/app/services/todoitem.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';



@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {

  listData: MatTableDataSource<any> = new MatTableDataSource<any>();
  
  displayedColumns:string[]=["Options", "Title", "Done", "Description"];
 @ViewChild(MatSort) sort= new MatSort();
 @ViewChild('paginator') paginator!: MatPaginator;


 filterText:string='';
 isLoading = false;
 skipCount=0;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
 sortingElement:string='Id asc';

 constructor(private service:TodoitemService , public dialog:MatDialog,
  private _liveAnnouncer: LiveAnnouncer
  ) {
  // this.dummyData={
  //   totalCount:0,
  //   items:[{
  //     id:0,
  //     name:''}]
    
  // }
  this.service.listen().subscribe((m:any) =>{

    console.log(m);
    this.refreshTodoList();

  })
     
 }

 

ngOnInit(): void {

   this.refreshTodoList();
   this.listData.sort = this.sort ;
  

}

ngAfterViewInit(): void {
  this.listData.sort = this.sort ;
}


onEdit(todo: any)
 {
  //const dialogConfig = new MatDialogConfig<{Id:number ; Name:string;}>();

  console.log(todo.title);
  console.log(todo.id);

  this.service.formData.id= todo.id;
  this.service.formData.title = todo.title;
  this.service.formData.description = todo.description;
  this.service.formData.done = todo.done;

  let Id = todo.id;
  let Title = todo.title;
  let Description = todo.description;
  let Done = todo.done;
  const dialogRef = this.dialog.open(EditTodoComponent, {
    
    data: {id: Id, title:Title,description: Description , done: Done  }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
              
      this.refreshTodoList();
    }
  });
}



onDelete(id:number)
{
  
  if(confirm('Are you sure to delete?'))
  {
    this.service.deleteTodo(id).subscribe(res=>{
      
      this.refreshTodoList();

     
    })
    
  }
}

refreshTodoList()
{
  //this.dummyData=[{Id:1 , Name:'IT'},
  //{Id:2 , Name:'Finance'}];
  //this.listData.data=this.dummyData;
  this.service.getTodoList(this.filterText,this.skipCount,this.pageSize,this.sortingElement).subscribe(data =>{
    this.listData =new MatTableDataSource(data.items);
    this.totalRows=data.totalCount;
    this.listData.paginator = this.paginator;

    setTimeout(() => {
      this.paginator.pageIndex = this.currentPage;
      this.paginator.length = data.totalCount;

    });
    this.isLoading = false;
  }, error => {
    console.log(error);
    this.isLoading = false;
  });
  
}

applyFilter(event: Event) {
  this.filterText = (event.target as HTMLInputElement).value;
  this.refreshTodoList();
}

onAdd()
{

const dialogConfig = new MatDialogConfig();
dialogConfig.disableClose = true;
dialogConfig.autoFocus = true;
dialogConfig.width ="500px";
dialogConfig.height ="400px";
this.dialog.open(AddTodoComponent , dialogConfig);
}

announceSortChange(sortState: Sort) {
  // This example uses English messages. If your application supports
  // multiple language, you would internationalize these strings.
  // Furthermore, you can customize the message to add additional
  // details about the values being sorted.
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    this.sortingElement=sortState.active+' '+sortState.direction;
    this.paginator.pageIndex=0;
    this.currentPage = this.paginator.pageIndex;

    this.pageSize = this.paginator.pageSize;
    this.skipCount = this.currentPage * this.pageSize;
    this.paginator.firstPage();
    this.refreshTodoList();

   // alert(sortState.direction);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
}

pageChanged(event: any) {
  console.log({ event });
  if(this.pageSize!= event.pageSize)
  {
    this.paginator.pageIndex=0;
    this.pageSize = event.pageSize;
    this.paginator.firstPage();
    this.currentPage = this.paginator.pageIndex;

  }
  else{
    this.currentPage = event.pageIndex;

  }
  this.skipCount = this.currentPage * this.pageSize;

  this.refreshTodoList();
}
}
