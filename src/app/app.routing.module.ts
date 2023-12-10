import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginViewComponent } from './views/login/login.component';
import { HomeViewComponent } from './views/home/home.component';
import { CatalogViewComponent } from './views/catalog/catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';
import { MainComponent } from './views/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginViewComponent,
    HomeViewComponent,
    CatalogViewComponent,
    PagenotfoundComponent,
    MainComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'list', component: HomeViewComponent },
      { path: 'delete/:postId', component: LoginViewComponent },
      { path: 'delete', component: LoginViewComponent, pathMatch: 'full' },
      { path: 'add', component: CatalogViewComponent },
      { path: 'home', component: MainComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
    ]),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [HomeViewComponent],
})
export class AppRoutingModule {}
