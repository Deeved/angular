import { Component, Input, OnInit, Output } from '@angular/core';
import { Pessoa } from 'src/app/pessoa';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input('pessoaFilho') pessoa:Pessoa

  constructor() { }

  ngOnInit(): void {
  }

}
