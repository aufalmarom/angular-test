import { Injectable } from '@angular/core';
import { Test } from '../test/shared/test';
import { AppResponse } from '../shared/app-response.model';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getData(){
    const mockData: Test[] = [];

    let save = new Test();
    save.id = 1;
    save.value = 'Data Ji';
    mockData.push(save);

    save = new Test();
    save.id = 2;
    save.value = 'Data Ro';
    mockData.push(save);

    save = new Test();
    save.id = 3;
    save.value = 'Data Lu';
    mockData.push(save);

    const resp = { 'status':200, 'message':'OK', 'data': mockData};
    
    return of(new AppResponse(resp));
  }
}
