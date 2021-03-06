import { Component, OnInit } from '@angular/core';
import { Song } from '../Song';
import { SongscontainerComponent } from '../songscontainer/songscontainer.component';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit, Song {

  title: String;
  artist: String;
  anio: Number;
  disco: String;
  estilo: String;
  caratula: String;
  numDisco: Number;
  numCancion: Number;
  url:String;

  constructor(title:String,
              artist:String,
              anio:Number,
              disco:String,
              estilo:String,
              caratula:String,
              numDisco:Number,
              numCancion:Number,
              url:String) 
    
    {

      this.title=title;
      this.artist=artist;
      this.anio=anio;
      this.disco=disco;
      this.estilo=estilo;
      this.caratula=caratula;
      this.numDisco=numDisco;
      this.numCancion=numCancion;
      this.url=url;
    
  }
 ;

  ngOnInit(): void {
    

  }

 



}
