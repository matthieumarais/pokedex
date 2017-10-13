import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/Rx';


import { PokemonApiService } from '../services/pokemon-api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pokemonDetail;

  constructor(private route: ActivatedRoute, private pokemonApi: PokemonApiService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log(params.name);
      this.pokemonDetail = this.pokemonApi.getDetailPokemon(params.name).share();
    });

  }
 

}
