import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EcommerceService } from 'src/app/providers/ecommerce.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {

  constructor(private fb:FormBuilder, public userService:EcommerceService, private router:Router) { }

  ngOnInit(): void {
  }

  createAccountForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    username :['', [Validators.required, Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  create(){
    if(this.createAccountForm.valid){
      const fd = new FormData();
      fd.append('email', this.createAccountForm.controls['email'].value);
      fd.append('username', this.createAccountForm.controls['username'].value);
      fd.append('password', this.createAccountForm.controls['password'].value);
      // if (this.file) {
      //   fd.append('file', this.file);
      //  }
      this.userService.createNewUser(this.createAccountForm.value).then((res)=>{
        console.log(res);
        this.userService.user = res;
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['/posts']);
      }).catch((err)=>{
        console.log(err);
      });
    }
  }

  file: File = null;
 
  onFilechange(event: any) {
    debugger
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }
  
  upload() {
    debugger
    if (this.file) {
      this.userService.uploadfile(this.file).subscribe(resp => {
        alert("Uploaded")
      })
    } else {
      alert("Please select a file first")
    }
  }

}
