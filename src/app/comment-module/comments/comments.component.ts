import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Comment } from '../modules/comment.module';

import { getComments } from '../../store/selectors/comments.selector';
import { Appstate } from '../../store/reducers';
import { ShowEditCommentForm, ShowDeleteConfirmationDialog } from '../../store/actions/comment.actions';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments$: Observable <Comment[]>;

  constructor(private store: Store<Appstate>) { 
    this.comments$ = store.select(getComments)
  }

  ngOnInit() {
  }

  toggleCommentEditForm(comment: Comment) {
    this.store.dispatch(new ShowEditCommentForm(comment));
  }

 
  toggleDeleteConfirmationDialog(comment? : Comment) {
    this.store.dispatch(new ShowDeleteConfirmationDialog(comment));
  }
}
