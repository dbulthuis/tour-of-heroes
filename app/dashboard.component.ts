import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
  providers:[HeroService],  
})
  
export class DashboardComponent {
  heroes: Hero[] = [];
  
  constructor(private _router: Router, heroService: HeroService){
    this.heroes = heroService.getHeroes().slice(1,10);
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
}

