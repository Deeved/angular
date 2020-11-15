import { Component, Output, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa'

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  @Output() pessoaPai

  pessoas: Pessoa[] = [
    {nome:'Deeved', idade: 31, genero: 'M'},
    {nome:'Natalia', idade: 25, genero: 'F'},
    {nome:'Sabrina', idade: 23, genero: 'F'}
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

  onDetails(pessoa:Pessoa){
    this.pessoaPai = pessoa
    // console.log(this.pessoaPai)
  }
}
