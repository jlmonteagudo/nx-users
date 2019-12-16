import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataAccessOptions } from '../data-access.options';
import { User, UserQuery } from './user';
import { PaginatedData } from '../common/paginated-data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL_BASE: string;

  constructor(private http: HttpClient, options: DataAccessOptions) {
    this.URL_BASE = `${options.apiBaseUrl}/users`;
  }

  findOne(id: string): Observable<User> {
    return this.http.get<User>(`${this.URL_BASE}/${id}`);
  }

  find(): Observable<User[]> {
    return this.http.get<User[]>(this.URL_BASE);
  }

  findPaginated(query: UserQuery): Observable<PaginatedData<User>> {

    let params: HttpParams = new HttpParams()
      .set('_page', query.pageIndex.toString())
      .set('_limit', query.pageSize.toString());

    if (query.sortDirection) {
      params = params
        .append('_sort', query.sortField)
        .append('_order', query.sortDirection);
    }

    if (query.filter) {
      params = params.append('name_like', query.filter);
    }

    return this.http.get<User[]>(this.URL_BASE, { observe: 'response', params }).pipe(
      map((resp: HttpResponse<User[]>) => ({ count: +resp.headers.get('x-total-count'), data: resp.body }))
    );

  }

  insert(user: User): Observable<User> {
    return this.http.post<User>(this.URL_BASE, user);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.URL_BASE}/${user.id}`, user);
  }

  delete(id: string): Observable<User> {
    return this.http.delete<User>(`${this.URL_BASE}/${id}`);
  }

}
