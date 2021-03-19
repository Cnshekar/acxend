import { Injectable } from '@angular/core';
import { CSVRecord } from './csv/CSVModel';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  configUrl = 'http://localhost:51262/CSV/SaveData';

  constructor(private http: HttpClient) { }

  postData(data) {
    debugger;
    return this.http.post(this.configUrl, data);
  }

}
