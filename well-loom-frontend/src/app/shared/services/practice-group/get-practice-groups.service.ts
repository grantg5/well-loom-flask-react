import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environmentVars } from 'shared/environmentVars';
import { apiUrls } from 'shared/apiUrls';
import { PracticeGroup } from 'shared/interfaces/practiceGroup';

interface GetPracticeGroupsResults {
  id: number,
  practiceGroupName: string,
  practiceGroupDescription: string,
  practiceGroupImage: string,
  isActive: boolean
}

@Injectable({
  providedIn: 'root'
})
export class GetPracticeGroupsService {

  constructor(private http: HttpClient) { }

  getPracticeGroups(): Observable<PracticeGroup[]> {
    const headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const fetchResultsObservable$: Observable<GetPracticeGroupsResults[]> = this.http.get<GetPracticeGroupsResults[]>(
      `${ environmentVars.servicesUrl }${ apiUrls.apiRoot }${ apiUrls.getPracticeGroups }`, { headers }
    );

    return fetchResultsObservable$.pipe(
      map(fetchResults => fetchResults.map(fetchResult => (
      {
        id: fetchResult.id,
        practiceGroupName: fetchResult.practiceGroupName,
        practiceGroupDescription: fetchResult.practiceGroupDescription,
        practiceGroupImage: fetchResult.practiceGroupImage
      } as PracticeGroup
    ))));
  }
}
