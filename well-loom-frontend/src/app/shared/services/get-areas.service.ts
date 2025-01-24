import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'shared/environmentVariables';
import { apiUrls } from 'shared/apiUrls';
import { Area } from 'shared/interfaces/area';

@Injectable({
  providedIn: 'root'
})
export class GetAreasService {

  constructor(private http: HttpClient) { }

  getAreas(): Observable<Area[]> {
    const mockAreas: Area[] = [
      {
          id: 1,
          areaName: "Spiritual",
          areaDescription: "Focuses on practices related to the soul and inner peace.",
          isActive: true,
          createdBy: 1,
          createDateTime: "2025-01-01T10:00:00",
          updatedBy: 2,
          updateDateTime: "2025-01-10T12:00:00"
      },
      {
          id: 2,
          areaName: "Mental",
          areaDescription: "Practices designed to enhance cognitive and emotional well-being.",
          isActive: true,
          createdBy: 2,
          createDateTime: "2025-01-02T11:00:00",
          updatedBy: 1,
          updateDateTime: "2025-01-12T13:00:00"
      },
      {
          id: 3,
          areaName: "Physical",
          areaDescription: "Focuses on improving the body's health and fitness.",
          isActive: true,
          createdBy: 3,
          createDateTime: "2025-01-03T12:00:00",
          updatedBy: 2,
          updateDateTime: "2025-01-13T14:00:00"
      }
    ];

    return of(mockAreas);
    
    // To be uncommented once services are built
    // return this.http.get<Area>(`${environment.baseUrl}${apiUrls.getAreas}`);
  }
}
