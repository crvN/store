import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store/store.component';
import { StoreModule } from './store/store.module';
import { CounterDirective } from './directives/counter.directive';
import { AppRoutingModule } from './app.routing';
import { StoreFirstGuard } from './guards/store-first.guard';

@NgModule({
  declarations: [AppComponent, CounterDirective],
  imports: [BrowserModule, StoreModule, FormsModule, AppRoutingModule],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
