import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any
  pistas:any[]

  constructor(private activatedRoute: ActivatedRoute,
              private _spotifyService: SpotifyService) { }

  ngOnInit() {

  console.log('*****************************************')

  this.activatedRoute.params
                     .map( parametros => parametros['id'])
                     .subscribe(id => {
                        console.log(id)
                        this._spotifyService.getArtista(id)
                             .subscribe( data => this.artista = data )

                        this._spotifyService.getCancion(id)
                             .subscribe( data => this.pistas = data )
                      })

  }
}
