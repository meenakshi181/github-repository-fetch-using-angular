import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  


  constructor(
    private httpClient: HttpClient
  ) { }


  //for user profile
  getData(username:string)
  {
    let url='https://api.github.com/users/${username}';
    return this.httpClient.get(url);

  }

  //for git repos
  getRepo(username: string,page:number,per_page:number)
  {
    let url = `https://api.github.com/search/repositories?q=user:${username} in:name sort:updated-asc&page=${page}&per_page=${per_page}`;
    return this.httpClient.get(url);
  }
}