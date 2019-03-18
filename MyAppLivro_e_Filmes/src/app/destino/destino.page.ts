import { Component, OnInit } from '@angular/core';
import { Livro } from '../model/livros';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.page.html',
  styleUrls: ['./destino.page.scss'],
})
export class DestinoPage {

  public livro : Livro;

  constructor() { 
  }

  ngOnInit() {
  }

}
