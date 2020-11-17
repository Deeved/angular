import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { CepServiceService } from '../cep-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  endereco = {}
  isReadonly = true

  constructor(private fb: FormBuilder, private cepService: CepServiceService) { }
  
  formulario = this.fb.group({
    cep: [''],
    rua: [''],
    numero: [''],
    bairro: [''],
    complemento: [''],
    cidade: [''],
    uf: ['']
  })

  ngOnInit(): void {
  }

  getEndereco(){
    //replace - retira o que não for numero
    let cep = (this.formulario.value.cep).replace(/\D/g, '')
    
    //validação de tamanho
    if( cep.length != 8 ) { 
      window.alert('cep inválido')
      return
    }

    this.cepService.getCep(cep).subscribe( dados =>{
      this.preencherForm(dados)
    })
  }

  //preenche o formulario 
  preencherForm(end){
    this.formulario.patchValue({
      rua: end.logradouro,
      bairro: end.bairro,
      cidade: end.localidade,
      uf: end.uf
    })
    this.isReadonly = false
  }
}
