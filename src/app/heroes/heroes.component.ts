import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //Atribuindo a classe Hero no objeto hero!
  heroes = HEROES;
  selectedHero: Hero;

  onSelected(hero: Hero): void {
    this.selectedHero = hero;
  }

  
  constructor() { }

  ngOnInit() {
  }

}
