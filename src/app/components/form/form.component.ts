import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  mainForm:FormGroup;
  generos:Array<Object> = []
  cores:Array<Object> = []
  constructor(private formBuilder:FormBuilder) {
    // Array de generos
    this.generos = [
      {nome:"Masculino", valor:"m"},
      {nome:"Feminino", valor:"f"},
      {nome:"Outros", valor:"o"},
    ]

    // Array de cores
    this.cores = [
      {nome:"Vermleho", valor:"#f54242"},
      {nome:"Amarelo", valor:"#f5ef42"},
      {nome:"Azul", valor:"#426ff5"},
      {nome:"Rosa", valor:"#ec42f5"},
      {nome:"Verde", valor:"#42f58a"},
      
    ]

    // adicionar os atributos ao formulário
    this.mainForm = this.formBuilder.group({
      nome:'',
      sobrenome:'',
      email:'',
      genero:'',
      corFavorita:'',
      cpf:'',
      pais:''
    })
  }

  ngOnInit() {
  }

}
