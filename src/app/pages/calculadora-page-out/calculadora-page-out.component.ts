import { Solicitud } from './../../models/Solicitud';
import { CalculadoraService } from './../../services/calculadora.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-calculadora-page-out',
  templateUrl: './calculadora-page-out.component.html',
  styleUrls: ['./calculadora-page-out.component.scss'],
  providers: [CalculadoraService],
})
export class CalculadoraPageOutComponent implements OnInit {
  hiddenSolicitud = false;
  soli: any = {}
  constructor(private service: CalculadoraService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  addMonths(date: Date, months: number) {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
      date.setDate(0);
    }
    return date;
  }

  handleSolicitud(soli: Solicitud){
    this.hiddenSolicitud = true;
    this.soli = soli;
  }

  hiddenRegistro(e: any){
    this.hiddenSolicitud = false;

  }
}
