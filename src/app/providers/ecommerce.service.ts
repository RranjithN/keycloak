import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  user: any;

  constructor(
    private httpClient: HttpClient,
  ) { }
  
  public uploadfile(file: File) {
    let formParams = new FormData();
    formParams.append('file', file)
    return this.httpClient.post('http://localhost:3000/uploadFile', formParams)
  }

  public createNewUser(dataObj:any){
    return new Promise((resolve, reject)=>{
      this.httpClient.post('http://localhost:3000/users', dataObj).subscribe(
        (res)=>{
          resolve(res);
        },
        (err)=>{
          reject(err);
        }
      );
    });
  }
}
