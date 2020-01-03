import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import {ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AlbumsComponent } from './albums/albums.component';
import { EditorialComponent } from './editorial/editorial.component';
import{DataService} from './data.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const appRoutes: Routes = [
  {
    path: 'homepage',
    component: MainComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'editorial',
    component: EditorialComponent
  },
  { path: '**',
    redirectTo: '/homepage',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AlbumsComponent,
    EditorialComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { 

 

}
