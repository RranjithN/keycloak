import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../../providers/ecommerce.service';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  
  constructor(public http:HttpClient,public uploadService: EcommerceService) { }
  products:any;
  img = "assest/moto-g52-64gb.webp";
  ngOnInit() {
    this.http.get("assets/mobiles.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }

  file: File = null;
 
 onFilechange(event: any) {
   console.log(event.target.files[0])
   this.file = event.target.files[0]
 }
 
 upload() {
   debugger
   if (this.file) {
     this.uploadService.uploadfile(this.file).subscribe(resp => {
       alert("Uploaded")
     })
   } else {
     alert("Please select a file first")
   }
 }


}
