import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrls } from 'shared/apiUrls';
import { environmentVars } from 'shared/environmentVars';

export class ReusableServiceCalls {
  static callGetService<T>(http: HttpClient, apiEndpoint: string): Observable<T> {
    const headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return http.get<T>(
      `${ environmentVars.servicesUrl }${ apiUrls.apiRoot }${ apiEndpoint }`, { headers }
    );
  }
}