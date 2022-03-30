import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { ShowCatComponent } from './show-cat.component';
import {MatSort, Sort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import {MatDialog , MatDialogConfig} from '@angular/material/dialog';

describe('ShowCatComponent', () => {
  let component: ShowCatComponent;
  let fixture: ComponentFixture<ShowCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
