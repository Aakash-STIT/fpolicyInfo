import { Component, OnInit, ViewChild } from '@angular/core';
import { Fpolicy } from './fpolicy';
import { FpolicyService } from './fpolicy.service';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { insertpolicy } from './insertPolicy.component';

@Component({
  selector: 'my-selector',
  templateUrl: './fpolicy.component.html',
  styleUrls: ['./fpolicy.component.css']
})
export class FpolicyComponent implements OnInit {
  displayedColumns: string[] = [
    'fpolicyId',
    'policyHolderName',
    'policyHolderAge',
    'actions'
  ];
  fpolicies: Fpolicy[];

  fpolicy = new Fpolicy();
  dataSource = new MatTableDataSource(this.fpolicies);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngOnInit(): void {
    this.getFpolicies();
  }

  constructor(
    private _fpolicyService: FpolicyService,
    private dialog: MatDialog
  ) {}

  getFpolicies(): void {
    this._fpolicyService.getAllFpolicy().subscribe(
      fpolicyData => {
        this.dataSource = new MatTableDataSource(fpolicyData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletePolicy(fpolicyId: number) {
    this._fpolicyService
      .deletePolicy(fpolicyId)
      .subscribe(response => this.getFpolicies());
  }

  editPolicy(fpolicy: Fpolicy) {
    this.dialog.open(insertpolicy);
    this.fpolicy.fpolicyId = fpolicy.fpolicyId;
    this.fpolicy.policyHolderName = fpolicy.policyHolderName;
    this.fpolicy.policyHolderAge = fpolicy.policyHolderAge;
  }
}
