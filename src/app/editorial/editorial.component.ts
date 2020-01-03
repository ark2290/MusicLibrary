import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private dataService: DataService,private router: Router) { }
  formGroup: FormGroup;
  value: any= '';
  
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      'Title': ['', [Validators.required]],
      'Album': ['', [Validators.required]],
      'Composer': ['', [Validators.required]],
      'ReleasedDate': ['', [Validators.required]],
      'Artist': ['', [Validators.required]]
    });
  }

  submit(val) {
   this.dataService.data.push(val);
   this.router.navigate(["/albums"]);
  }

}
