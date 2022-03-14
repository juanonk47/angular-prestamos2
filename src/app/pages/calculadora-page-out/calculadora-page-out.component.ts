import { Calculadora } from './../../models/Calculadora';
import { CalculadoraService } from './../../services/calculadora.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TablePagosComponent } from 'src/app/components/table-pagos/table-pagos.component';

@Component({
  selector: 'app-calculadora-page-out',
  templateUrl: './calculadora-page-out.component.html',
  styleUrls: ['./calculadora-page-out.component.scss'],
  providers: [CalculadoraService]
})
export class CalculadoraPageOutComponent implements OnInit {

  mindate = new Date();
  form = new FormGroup({
    cantidad: new FormControl(1000,[Validators.required,Validators.min(1000),Validators.max(100000)]),
    fecha: new FormControl(new Date(),Validators.required)
  })



  cal: Calculadora = {max:100000,min:1000,num: 12}
  constructor(private service: CalculadoraService, public dialog: MatDialog) {
    this.service.getCalculadora().subscribe(data => {
      this.cal = data
      this.form = new FormGroup({
        cantidad: new FormControl(1000,[Validators.required,Validators.min(data.min),Validators.max(data.max)]),
        fecha: new FormControl(new Date(),Validators.required)
      })
    });
  }

  ngOnInit(): void {
  }

  formatLabel(value: number){
    if (value>= 1000){
      return Math.round(value/1000) + 'k'
    }
    return value;
  }

  handleValue(e: any){
    this.form.patchValue({
      cantidad: e.value
    })

  }

  openTable(){

    this.dialog.open(TablePagosComponent, {
      data: {
        animal: 'panda'
      }
    })

  }

}
