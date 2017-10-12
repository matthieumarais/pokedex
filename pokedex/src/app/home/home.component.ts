import { Component, OnInit } from '@angular/core';

import { PokemonApiService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "home";
  pokemons;

  constructor(private pokemonApi: PokemonApiService) { }

  ngOnInit(): void {
    this.pokemons = this.pokemonApi.getAllPokemons();

  }

}
// 'http://pokeapi.co/api/v2/pokemon/358'