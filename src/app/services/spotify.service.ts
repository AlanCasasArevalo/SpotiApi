import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

  artistas:any[] = []

  urlBusqueda:string = "https://api.spotify.com/v1/search"

  constructor(private _http:Http) { }

  getArtistas( termino:string ){
    let headers = new Headers()
    headers.append('authorization', 'Bearer BQDWKRecs7OVZ3QreFiSi0TdQ-jYeRXu9_PZRElsybpZfAK3AY-rp0L9t7tdV2X8NVXks5IrPLvPBzqsv8S1LQ')

    let query = `?q=${ termino }&type=artist`
    let url = this.urlBusqueda + query

    return this._http.get(url, { headers })
               .map( res => {
                  // console.log( res.json().artists.items )
                  this.artistas = res.json().artists.items
                  // console.log(this.artistas)
                  return res.json().artists.items
               })
  }

}
