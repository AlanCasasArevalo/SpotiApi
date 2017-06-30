import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

  artistas:any[] = []
  token:string = 'Bearer BQBmstZDcLBzTh7jIwaDY_4Xr5F2vl_AjHtCtSrDTaKgEOWwM1dQZsC-Hpy16rmPLI2rutmA-AiN8zYucPW7Iw'

  urlBusqueda:string = "https://api.spotify.com/v1/search"
  urlArtista:string = "https://api.spotify.com/v1/artists"
  urlCancion:string = "https://api.spotify.com/v1/artists"

  constructor(private _http:Http) { }

  getArtistas( termino:string ){
    let headers = new Headers()

    headers.append('authorization', this.token)
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
  
  getArtista( id:string ){
    let headers = new Headers()
    headers.append('authorization', this.token)

    let query = `/${ id }`
    let url = this.urlArtista + query

    return this._http.get(url, { headers })
               .map( res => {
                  // console.log( res.json() )
                  // this.artistas = res.json().artists.items
                  // // console.log(this.artistas)
                  return res.json()
               })
  }

  getCancion( id:string ){
    let headers = new Headers()

    headers.append('authorization',this.token )

    let query = `/${ id }/top-tracks?country=ES`
    let url = this.urlCancion + query 

    return this._http.get(url, { headers })
               .map( res => {
                  console.log( res.json().tracks )
                  return res.json().tracks
               })
  }

}
