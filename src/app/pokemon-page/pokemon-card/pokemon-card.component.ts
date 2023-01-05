import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.type';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input()pokemon!: Pokemon;
  @Output() delete = new EventEmitter<number>()

  editPokemon: boolean = false;

  level: number = 1;

  constructor() { }


  ngOnInit(): void {
  }

  deleteElement(){
    this.delete.emit(this.pokemon.id)
  }

}
