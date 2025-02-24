import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environmentVars } from 'shared/environmentVars';
import { apiUrls } from 'shared/apiUrls';
import { Theory } from 'shared/interfaces/theory';
import { ReusableServiceCalls } from '../reusable-components/reusable-service-calls';

interface GetTheoriesResults {
  id: number,
  theoryName: string,
  theoryFounder: string,
  theoryDescription: string,
  isActive: boolean
}

@Injectable({
  providedIn: 'root'
})
export class GetTheoriesService {

  constructor(private http: HttpClient) { }

  getTheories(): Observable<Theory[]> {
    const fetchResultsObservable$: Observable<GetTheoriesResults[]> =
              ReusableServiceCalls.callGetService<GetTheoriesResults[]>(this.http, apiUrls.getTheories);

    return fetchResultsObservable$.pipe(
      map(fetchResults => fetchResults.map(fetchResult => (
      {
        id: fetchResult.id,
        theoryName: fetchResult.theoryName,
        theoryFounder: fetchResult.theoryFounder,
        theoryDescription: fetchResult.theoryDescription
      } as Theory
    ))));
  }
}
