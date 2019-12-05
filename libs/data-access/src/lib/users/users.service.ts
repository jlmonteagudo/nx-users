import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataAccessOptions } from '../data-access.options';
import { User } from './user';
import { PaginatedData } from '../common/paginated-data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL_BASE: string;

  constructor(private http: HttpClient, options: DataAccessOptions) {
    this.URL_BASE = `${options.apiBaseUrl}/users`;
  }

  find(): Observable<User[]> {
    return this.http.get<User[]>(this.URL_BASE);
  }

  findPaginated(pageNumber: number, limit: number): Observable<PaginatedData<User>> {

    const params: HttpParams = new HttpParams()
      .set('_page', pageNumber.toString())
      .set('_limit', limit.toString());

    return this.http.get<User[]>(this.URL_BASE, { observe: 'response', params }).pipe(
      map((resp: HttpResponse<User[]>) => ({ count: +resp.headers.get('x-total-count'), data: resp.body }))
    );

  }

}
