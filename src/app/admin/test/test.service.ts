import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {}

  testURI: string = 'Test/getRecords/6';

  // currentExam = this.getExams()

  getTest(id) {
    return this.http.get(`test/getRecords/${id}`)
            .pipe(
              catchError(err => err),
              map((v: [{test_name: string, test_id: string}]) => { console.log(v) ;return { testName: v[0].test_name , testId: v[0].test_id } }),
                  )
  }

}