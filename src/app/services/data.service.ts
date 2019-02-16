import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// // import 'rxjs/add/observable';
import { Observable, of } from 'rxjs';
// import { Observable } from 'rxjs/observable';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../Common/app-error';
import { NotFoundError } from '../Common/not-found-error';
import { BadInput } from '../Common/bad-input';
// import { throw } from 'rxjs/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private Url: string , private http: Http) { }

  getAll() {
    return this.http.get(this.Url)
      .pipe(
        map(Response => Response.json()),
        catchError(this.handleError)
      );
  }

  create(resource) {
     // return throwError(new AppError);
    return this.http.post(this.Url, JSON.stringify(resource))
      .pipe(
        map(Response => Response.json()),
        catchError(this.handleError)
      );
  }

  update(resource) {
    return this.http.patch(this.Url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        map(Response => Response.json()),
        catchError(this.handleError)
      );
  }

  delete(id) {
    //  return throwError(new AppError);
    console.log('id:' + id);
    let deleteUrl = this.Url + '/' + 333;
    console.log(deleteUrl);
    return this.http.delete(deleteUrl)
    .pipe(
      map(Response => Response.json()),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    } else {
      return throwError(new AppError(error));
    }
  }
}


