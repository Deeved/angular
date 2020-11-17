import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators'

import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroUrl = 'api/heroes'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  
  getHeroes(): Observable<Hero[]>{
    // TODO: send the message _after_ fecthing the heroes
    //this.messageService.add('HeroService: fetched heroes')
    //return of(HEROES)
    return this.httpClient.get<Hero[]>(this.heroUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      ) 
  }
  
  /** GET hero by id. will 404 if id not found */
  getHero(id: number){
    const url = `${this.heroUrl}/${id}`
    return this.httpClient.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
  }

  private log(message: string){
    this.messageService.add(`HeroService: ${message}`)
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any):Observable<T> =>{
      
      // TODO: send the error to remote logging infrastructure
      console.error(error) // logo to console instead
      
      // TODO: better job of transforming erro for user consumption
      this.log(`${operation} falied: ${error.message}`)

      // let the app keep running by returning an empty result.
      return of(result as T)
    }
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any>{
    return this.httpClient.put(this.heroUrl, hero, this.httpOptions).pipe(
      tap(_ =>this.log(`update hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }

  addHero(hero: Hero):Observable<Hero> {
    return this.httpClient.post(this.heroUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${ newHero.id }`)),
      catchError(this.handleError<Hero>('addHero'))
    )
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroUrl}/${id}`;

    return this.httpClient.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    )
  }

  /** GET heroes whose name contains term */
  searchHeroes(term: string): Observable<Hero[]> {
    if(!term.trim()){
      // if not search term, return empty hero array
      return of([])
    }

    return this.httpClient.get<Hero[]>(`${this.heroUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    )
  }
}
