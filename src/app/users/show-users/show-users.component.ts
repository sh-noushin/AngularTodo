import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AddUserComponent } from '../add-user/add-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  listData: MatTableDataSource<any> = new MatTableDataSource<any>();

  displayedColumns: string[] = ["Options", "Id", "UserName", "Password"];
  @ViewChild(MatSort) sorting = new MatSort();
  @ViewChild('paginator') paginator!: MatPaginator;

  filterText: string = '';
  isLoading = false;
  skipCount = 0;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  sortingElement: string = 'Id asc';


  constructor(
    private service: UserService,
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer
  ) { }

  ngOnInit(): void {

    this.refreshUserList();
    this.listData.sort = this.sorting;

  }

  ngAfterViewInit(): void {
    this.listData.sort = this.sorting;
  }


  onEdit(user: any) {
    //const dialogConfig = new MatDialogConfig<{Id:number ; Name:string;}>();
    this.service.formData.id = user.id;
    this.service.formData.userName = user.userName;
    this.service.formData.password = user.password;


    let Id = user.id;
    let UserName = user.userName;
    let Password = user.password;
    const dialogRef = this.dialog.open(EditUserComponent, {

      data: { id: Id, username: UserName , password: Password }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshUserList()
    });

  }



  onDelete(id: number) {

    if (confirm('Are you sure to delete?')) {
      this.service.deleteUser(id).subscribe(res => {

        this.refreshUserList();


      })

    }
  }

  refreshUserList() {
    //this.dummyData=[{Id:1 , Name:'IT'},
    //{Id:2 , Name:'Finance'}];
    //this.listData.data=this.dummyData;



    this.service.getUserist(this.filterText, this.skipCount, this.pageSize, this.sortingElement).subscribe(data => {
      this.listData = new MatTableDataSource(data.items);
      this.totalRows = data.totalCount;
      this.listData.paginator = this.paginator;

      setTimeout(() => {
        this.paginator.pageIndex = this.currentPage;
        this.paginator.length = data.totalCount;

      });
      this.isLoading = false;
    }
     
    );


  }

  applyFilter(event: Event) {
    this.filterText = (event.target as HTMLInputElement).value;
    this.refreshUserList();

  }

  onAdd() {

    const dialogRef = this.dialog.open(AddUserComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.refreshUserList()
    });
  }

  pageChanged(event: any) {
    console.log({ event });
    if (this.pageSize != event.pageSize) {
      this.paginator.pageIndex = 0;
      this.pageSize = event.pageSize;
      this.paginator.firstPage();
      this.currentPage = this.paginator.pageIndex;

    }
    else {
      this.currentPage = event.pageIndex;

    }
    this.skipCount = this.currentPage * this.pageSize;

    this.refreshUserList();
  }

  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      this.sortingElement = sortState.active + ' ' + sortState.direction;
      this.paginator.pageIndex = 0;
      this.currentPage = this.paginator.pageIndex;

      this.pageSize = this.paginator.pageSize;
      this.skipCount = this.currentPage * this.pageSize;
      this.paginator.firstPage();
      this.refreshUserList();

    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
