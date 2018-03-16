import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store/store.component';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
