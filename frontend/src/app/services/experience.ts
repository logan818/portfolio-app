import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Service()
export class ExperienceService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/experience`;

  getExperience(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
