import { Solicitud } from './../../models/Solicitud';
import { CalculadoraService } from './../../services/calculadora.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Calculadora } from 'src/app/models/Calculadora';
import { TablePagosComponent } from '../table-pagos/table-pagos.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-solicitud-prestamo',
  templateUrl: './solicitud-prestamo.component.html',
  styleUrls: ['./solicitud-prestamo.component.scss']
})
export class SolicitudPrestamoComponent implements OnInit {

  mindate = new Date();
  form = new FormGroup({
    cantidad: new FormControl(1000,[Validators.required,Validators.min(1000),Validators.max(100000)]),
    fecha: new FormControl(new Date(),Validators.required)
  })
  cal: Calculadora = {max:100000,min:1000,num: 12}

  @Output() buttonCredit = new EventEmitter<Solicitud>();

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
    let arrayDays: any = []
    let payOne = this.form.get('cantidad')?.value / this.cal.num;
    let dayPay: Date = this.form.get('fecha')?.value;
    let promise = new Promise((resolve) => {
      for (let index = 1; index <= this.cal.num; index++) {
        arrayDays.push({No: index, fecha: dayPay, monto: payOne})
        dayPay = new Date(dayPay.setMonth(dayPay.getMonth()+1))

      }
      resolve(arrayDays);
    })
    promise.then(data => {
      this.dialog.open(TablePagosComponent, {
        data: {
          dataSources: data
        }
      })
    });
  }

  handleChangeDatePicker(e: any){
    console.log(e);

  }

  sendSolicitud(){
    this.buttonCredit.emit({fecha: this.form.get('fecha')?.value,status: false,valor: this.form.get('cantidad')?.value});
  }

}
