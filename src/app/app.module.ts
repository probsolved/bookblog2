import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookdisplayComponent } from './bookdisplay/bookdisplay.component';
import { BookcardComponent } from './bookdisplay/bookcard/bookcard.component';
import { BookbibComponent } from './bookdisplay/bookbib/bookbib.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewComponent } from './bookdisplay/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    BookshelfComponent,
    BookdisplayComponent,
    BookcardComponent,
    BookbibComponent,
    NavbarComponent,
    FooterComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
