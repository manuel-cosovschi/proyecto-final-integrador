import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  pokemonDetails: any = null;
  types: any[] = [];
  typeDetails: any = null;
  selectedPokemon: any = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPokemons().subscribe(data => {
      this.pokemons = data.results;
    });

    this.dataService.getTypes().subscribe(data => {
      this.types = data.results;
    });
  }

  showPokemonDetails(name: string) {
    this.dataService.getPokemonDetails(name).subscribe(data => {
      this.pokemonDetails = data;
    });
  }

  showTypeDetails(type: string) {
    this.dataService.getTypeDetails(type).subscribe(data => {
      this.typeDetails = data;
    });
  }

  selectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon;
  }
}


