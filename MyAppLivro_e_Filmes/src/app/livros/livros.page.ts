import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.page.html',
  styleUrls: ['./livros.page.scss'],
})
export class LivrosPage implements OnInit {


  public livros: {titulo: string, subtitulo: string, capa: string, editora: string, autor: string, isbn: string, publicacao: string, paginas: string}[] = [
    {"titulo":'Filosofia', "subtitulo":'Abril', "capa":'Mario Sergio Cortella', 'editora':'Planeta','autor':'Mario Sergio Cortella','isbn':'não', 'publicacao':'08/8/18','paginas':'123'},
    {"titulo":'A contra', "subtitulo":'Que te cobra', "capa":'Cloves de barros filho', 'editora':'Globo','autor':'Cloves de barros filho','isbn':'sim', 'publicacao':'02/1/15','paginas':'142'}
  ];
  constructor() { }


  ngOnInit() {
  }

}
