import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from '../../../store/reducers';
import { EditComment, ShowEditCommentForm } from '../../../store/actions/comment.actions';

import { Comment } from '../../modules/comment.module';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() onCommentEditCancel= new EventEmitter<boolean>();
  creating = false;
  commentBox = '';
  constructor(private store: Store<Appstate>) { }

  ngOnInit() {
      this.commentBox = this.comment.commentText;
  }

  editComment(){
    const payload = {...this.comment, commentText: this.commentBox};
    this.store.dispatch(new EditComment(payload)); 
    this.store.dispatch(new ShowEditCommentForm(payload))
  }

      cancel() {
        const payload = this.comment;
        this.store.dispatch(new ShowEditCommentForm(payload))
    }

}
