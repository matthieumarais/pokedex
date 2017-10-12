import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PokemonApiService {

  constructor(private http: HttpClient) { }

  getAllPokemons() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/');

  }
}
