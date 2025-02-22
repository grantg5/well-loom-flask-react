import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiUrls } from 'shared/apiUrls';
import { Area } from 'shared/interfaces/area';
import { IGetResults } from '../reusable-components/results-interfaces';
import { ReusableServiceCalls } from '../reusable-components/reusable-service-calls';

interface GetAreasResults extends IGetResults {
  areaName: string,
  areaDescription: string
}

@Injectable({
  providedIn: 'root'
})
export class GetAreasService {

  constructor(private http: HttpClient) { }

  getAreas(): Observable<Area[]> {
    const fetchResultsObservable$: Observable<GetAreasResults[]> =
      ReusableServiceCalls.callGetService<GetAreasResults[]>(this.http, apiUrls.getAreas);

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
