import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/Rx';


import { PokemonApiService } from '../services/pokemon-api.service';


@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  pokemonTypes;

  constructor(private route: ActivatedRoute, public pokemonApi: PokemonApiService) { }

  
  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log(params.name);
      this.pokemonTypes = this.pokemonApi.getTypeOfPokemons(params.name).share();
      console.log(this.pokemonTypes);
    });
  }
  
}
