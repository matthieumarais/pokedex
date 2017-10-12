import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { RouterModule, Routes, Router } from '@angular/router';


import { PokemonApiService } from '../services/pokemon-api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokemonApi: PokemonApiService, private router: Router) { }

  ngOnInit() {
    //this.router.navigate(['pokemon'])
   // console.log(this.pokemons)
    this.route.params.subscribe( params => console.log(params));
  }

}
