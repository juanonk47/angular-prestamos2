import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
const ELEMENT_DATA: any[] = [
  {No: 1, fecha: 'Hydrogen', monto: 1.0079},
  {No: 2, fecha: 'Helium', monto: 4.0026},
  {No: 3, fecha: 'Lithium', monto: 6.941},
  {No: 4, fecha: 'Beryllium', monto: 9.0122},
  {No: 5, fecha: 'Boron', monto: 10.811},
  {No: 6, fecha: 'Carbon', monto: 12.0107},
  {No: 7, fecha: 'Nitrogen', monto: 14.0067},
  {No: 8, fecha: 'Oxygen', monto: 15.9994},
  {No: 9, fecha: 'Fluorine', monto: 18.9984},
  {No: 10, fecha: 'Neon', monto: 20.1797},
];
@Component({
  selector: 'app-table-pagos',
  templateUrl: './table-pagos.component.html',
  styleUrls: ['./table-pagos.component.scss']
})
export class TablePagosComponent implements OnInit {
  displayedColumns: string[] = ['No', 'fecha', 'monto'];
  dataSource = ELEMENT_DATA;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
  }

}
