import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  baseUrl = 'http://127.0.0.1:5000';

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
  ) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return hero;
  }
}
