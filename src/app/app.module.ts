import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
import { StoreComponent } from './store/store/store.component';

@NgModule({
  declarations: [AppComponent, StoreComponent],
  imports: [BrowserModule, ModelModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
