import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.type';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss'],
})
export class PokemonPageComponent implements OnInit {



  constructor() {}

  pokemonList: Pokemon[] = [
    {
      id: 387,
      name: 'Turtwig',
      catched: new Date(2000, 1, 1),
      imageUrl: 'https://thumbs.gfycat.com/WeeMarriedGoldeneye-max-1mb.gif',
      types: ['grass'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa, explicabo iste ad natus vel amet voluptas autem aliquam, odit officia voluptates unde blanditiis eos provident, consequatur temporibus quia in!',
    },
    {
      id: 388,
      name: 'Grottle',
      catched: new Date(2000, 1, 1),
      imageUrl:
        'https://static.wikia.nocookie.net/b97ea361-2caf-42c7-a1f4-e374fa262307/scale-to-width/755',
      types: ['grass'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa, explicabo iste ad natus vel amet voluptas autem aliquam, odit officia voluptates unde blanditiis eos provident, consequatur temporibus quia in!',
    },
    {
      id: 389,
      name: 'Torterra',
      catched: new Date(2000, 1, 1),
      imageUrl:
        'https://pa1.narvii.com/6662/f24b250b05b2d2a90fb77d88221a5fd4a65a412d_hq.gif',
      types: ['grass', 'ground'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa, explicabo iste ad natus vel amet voluptas autem aliquam, odit officia voluptates unde blanditiis eos provident, consequatur temporibus quia in!',
    },
    {
      id: 390,
      name: 'Chimchar',
      catched: new Date(2000, 1, 1),
      imageUrl: 'https://media.giphy.com/media/qTHCj6MOdTnAk/giphy.gif',
      types: ['fire'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa, explicabo iste ad natus vel amet voluptas autem aliquam, odit officia voluptates unde blanditiis eos provident, consequatur temporibus quia in!',
    },
    {
      id: 391,
      name: 'Monferno',
      catched: new Date(2000, 1, 1),
      imageUrl:
        'https://static.wikia.nocookie.net/68f60402-5c75-42e8-9709-5fbc80995259/scale-to-width/755',
      types: ['fire', 'fighting'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa, explicabo iste ad natus vel amet voluptas autem aliquam, odit officia voluptates unde blanditiis eos provident, consequatur temporibus quia in!',
    },
    {
      id: 392,
      name: 'Infernape',
      catched: new Date(2000, 1, 1),
      imageUrl:
        'https://static.wikia.nocookie.net/e9350e59-8718-4876-a38c-eba953ae20f1/scale-to-width/755',
      types: ['fire', 'fighting'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa, explicabo iste ad natus vel amet voluptas autem aliquam, odit officia voluptates unde blanditiis eos provident, consequatur temporibus quia in!',
    },
  ];

  
  filteredPokemon: Pokemon[] = JSON.parse(JSON.stringify(this.pokemonList));

  searchPoke(event: any){
    this.filteredPokemon = this.pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(event.target.value.toLowerCase()))
  }

  deletePokemon(pokemonId: number){
    this.filteredPokemon = this.filteredPokemon.filter(pokemon => pokemon.id != pokemonId)
    this.pokemonList = this.pokemonList.filter(pokemon => pokemon.id != pokemonId)
  }

  ngOnInit(): void {}
}
