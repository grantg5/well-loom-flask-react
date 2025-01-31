import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environmentVars } from 'shared/environmentVars';
import { apiUrls } from 'shared/apiUrls';
import { Area } from 'shared/interfaces/area';

interface GetAreasResults {
  id: number,
  areaName: string,
  areaDescription: string,
  isActive: boolean
}

@Injectable({
  providedIn: 'root'
})
export class GetAreasService {

  constructor(private http: HttpClient) { }

  getAreas(): Observable<Area[]> {
    const headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const fetchResultsObservable$: Observable<GetAreasResults[]> = this.http.get<GetAreasResults[]>(
      `${ environmentVars.servicesUrl }${ apiUrls.apiRoot }${ apiUrls.getAreas }`, { headers }
    );

    return fetchResultsObservable$.pipe(
      map(fetchResults => fetchResults.map(fetchResult => (
      {
        id: fetchResult.id,
        areaName: fetchResult.areaName,
        areaDescription: fetchResult.areaDescription
      } as Area
    ))));
  }
}
