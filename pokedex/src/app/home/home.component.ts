import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { PokemonApiService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "home";
  pokemons;
  linksArray: number[];
  currentPage: number;

  constructor(private pokemonApi: PokemonApiService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.currentPage = params.n;
      this.pokemons = this.pokemonApi.getAllPokemons(params.n);
      this.pokemons.subscribe((data) => {
        this.createLinksArray(data.count);
      })
    });
  };

  createLinksArray(numberOfPokemons: number) {

    let nbPage = Math.ceil(numberOfPokemons / 20);
    let linksArray = new Array(nbPage);
    let i = 0;
    while (i < nbPage) {
      linksArray[i] = i + 1;
      i++;
    }
    this.linksArray = linksArray;
  }
  envoi(input: string){
    this.router.navigate(['/pokemon', input]);
  }

}