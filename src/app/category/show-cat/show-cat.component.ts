import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/services/category.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AddCatComponent } from '../add-cat/add-cat.component';
import { EditCatComponent } from '../edit-cat/edit-cat.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';




@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.css']
})
export class ShowCatComponent implements OnInit {

  listData: MatTableDataSource<any> = new MatTableDataSource<any>();

  displayedColumns: string[] = ["Options", "Id", "Name"];
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


  constructor(private service: CategoryService, public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer
  ) {

    this.service.listen().subscribe((m: any) => {


      this.refreshCatList();

    })

  }


  handlePage() {

  }

  ngOnInit(): void {


    this.refreshCatList();
    this.listData.sort = this.sorting;

  }

  ngAfterViewInit(): void {
    this.listData.sort = this.sorting;
  }


  onEdit(cat: any) {
    this.service.formData.id = cat.id;
    this.service.formData.name = cat.name;

    let Id = cat.id;
    let Name = cat.name;
    const dialogRef = this.dialog.open(EditCatComponent, {

      data: { id: Id, name: Name }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshCatList()
    });

  }

  onDelete(id: number) {

    if (confirm('Are you sure to delete?')) {
      this.service.deleteCategory(id).subscribe(res => {

        this.refreshCatList();


      })

    }
  }

  refreshCatList() {

    this.service.getCatList(this.filterText, this.skipCount, this.pageSize, this.sortingElement).subscribe(data => {
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
    this.refreshCatList();

  }

  onAdd() {

    const dialogConfig = this.dialog.open(AddCatComponent);
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

    this.refreshCatList();
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
      this.refreshCatList();

    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
