import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  urlImagem = '';

  nome: string = 'abc';
  pessoa: any ={
    nome: 'def',
    idade: 12
  }

  constructor() { }

  ngOnInit() {
  }

}
