import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { EditCommentComponent } from './comment-module/comments/edit-comment/edit-comment.component';
import { DeleteCommentComponent } from './comment-module/comments/delete-comment/delete-comment.component';
import { CommentAddComponent } from './comment-module/comments/comment-add/comment-add.component';
import { reducers } from './store/reducers';
import { CommentsComponent } from './comment-module/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    EditCommentComponent,
    DeleteCommentComponent,
    CommentAddComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Todo DevTools'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
