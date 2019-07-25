import { Component, OnInit } from '@angular/core';
import { FpolicyService } from './fpolicy.service';
import { Fpolicy } from './fpolicy';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'insertpolicy',
  template: `
    <h1>Insert Policy Form</h1>
    <div>
      <form class="policy-form">
        <mat-form-field color="warn" class="input-width">
          <mat-label>ID</mat-label>
          <input matInput [(ngModel)]="fpolicy.fpolicyId" name="id" /><br />
        </mat-form-field>
        <mat-form-field color="warn" class="input-width">
          <mat-label>NAME</mat-label>
          <input
            matInput
            [(ngModel)]="fpolicy.policyHolderName"
            name="name"
          /><br />
        </mat-form-field>
        <mat-form-field color="warn" class="input-width">
          <mat-label>AGE</mat-label>
          <input
            matInput
            [(ngModel)]="fpolicy.policyHolderAge"
            name="age"
          /><br />
        </mat-form-field>
        <button (click)="insertPolicy()" mat-raised-button color="primary">
          Insert Policy
        </button>
      </form>
      {{ result }}
    </div>
  `,
  styles: [
    `
      h1 {
        color: green;
        text-align: center;
      }
      div {
        display: block;
        width: 40%;
        margin: auto;
        border: 2px solid white;
      }
      form {
        margin: 20px auto;
      }

      .policy-form {
        min-width: 150px;
        max-width: 500px;
        width: 80%;
        text-align: right;
      }
      .input-width {
        width: 100%;
      }
    `
  ]
})
export class insertpolicy implements OnInit {
  ngOnInit(): void {}
  result: string;
  fpolicy = new Fpolicy();
  res: HttpResponse<string>;
  constructor(private _fpolicyService: FpolicyService) {}

  insertPolicy(): void {
    this._fpolicyService.addPolicy(this.fpolicy).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log((this.result = error.text));
      }
    );
    this.fpolicy.fpolicyId = null;
    this.fpolicy.policyHolderName = '';
    this.fpolicy.policyHolderAge = null;
  }
}
