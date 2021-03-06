import { Component, DoBootstrap, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { CaratulaComponent } from '../caratula/caratula.component';
import { Song } from '../Song';
import { SongComponent } from '../song/song.component';
import { getDatabase, ref, get, child, set} from "firebase/database";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-songscontainer',
  templateUrl: './songscontainer.component.html',
  styleUrls: ['./songscontainer.component.css']
})
export class SongscontainerComponent implements OnInit {

  @Output() songs:any;
  @Output() selectSong!:any;
  static flagList:Boolean = false;
  search = '';
  public jsonSong = new Array();

  items: Observable<any[]>;
  constructor(public firestore: AngularFirestore, http: HttpClient) {
    this.items = firestore.collection('canciones').valueChanges();

    this.songs = this.items;

    this.songs.pipe().subscribe((val: any) => {
      //console.log(val);
      val.forEach((element: any) => {
        this.jsonSong.push(element);

      });

      });

  }

  ngOnInit(): void {
    this.selectSong = new SongComponent("","",0,"","","assets/img/without.png",0,0,"");

  }


  onItemSelector(value :any) {
    console.log(value);

    }

  public getSelectSong(numCancion :any){

    this.selectSong = this.firestore.collection('canciones', ref => ref.where('numCancion', '==', numCancion)).valueChanges();
    SongscontainerComponent.flagList=true


  }

  flagList(){

    return SongscontainerComponent.flagList;

  }

  getSelect():Song{
    return this.selectSong;
  }



}


