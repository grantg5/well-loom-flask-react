import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environmentVars } from 'shared/environmentVars';
import { apiUrls } from 'shared/apiUrls';
import { Challenge } from 'shared/interfaces/challenge';
import { ReusableServiceCalls } from '../reusable-components/reusable-service-calls';

interface GetChallengesResults {
  id: number,
  challengeName: string,
  challengeDescription: string,
  isActive: boolean
}

@Injectable({
  providedIn: 'root'
})
export class GetChallengesService {

  constructor(private http: HttpClient) { }

  getChallenges(): Observable<Challenge[]> {
    const fetchResultsObservable$: Observable<GetChallengesResults[]> =
          ReusableServiceCalls.callGetService<GetChallengesResults[]>(this.http, apiUrls.getChallenges);

    return fetchResultsObservable$.pipe(
      map(fetchResults => fetchResults.map(fetchResult => (
      {
        id: fetchResult.id,
        challengeName: fetchResult.challengeName,
        challengeDescription: fetchResult.challengeDescription
      } as Challenge
    ))));
  }
}
