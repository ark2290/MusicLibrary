import { Component, OnInit,Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
 public value: any;
 public searchAlbum = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.value = this.dataService.data;
  }

}
