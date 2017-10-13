import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PokemonApiService {

  constructor(private http: HttpClient) { }

  getAllPokemons(pageNumber: number) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon' + "?offset=" + ((pageNumber - 1) * 20));
  }

  getDetailPokemon(name: string){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+ name);
  }
 
}
//http://pokeapi.salestock.net/api/v2/pokemon