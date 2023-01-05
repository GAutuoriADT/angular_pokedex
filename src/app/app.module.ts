import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonCardComponent } from './pokemon-page/pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './pokemon-page/pokemon-detail/pokemon-detail.component';
import { FormsModule } from '@angular/forms';
import { MypipePipe } from './pipes/mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonPageComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
