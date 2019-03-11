import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {

  public filmes: {assunto: string, editora: string, autor: string}[] = [
    {"assunto":'Literatura ', "editora":'Abril', "autor":'Eduardo Spohr'},
    {"assunto":'Romances', "editora":'Abril', "autor":'Christopher Paolini'},
    {"assunto":'Auto-Ajuda', "editora":'Abril', "autor":'Lisa Genova'},
    {"assunto":'Drama', "editora":'Abril', "autor":'E. L. James'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
