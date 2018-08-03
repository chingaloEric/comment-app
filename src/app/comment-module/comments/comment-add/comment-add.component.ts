import { Component, OnInit, Output, EventEmitter, Input, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from '../../../store/reducers';
import { CreateComment } from '../../../store/actions/comment.actions';
import { Comment } from '../../modules/comment.module';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {
  commentFormData: any;
  creating : boolean;

  constructor(private store: Store<Appstate>) { }

  ngOnInit() {
      this.commentFormData = ''
  }

  postComment(){;
    const payload = this.commentFormData
    this.store.dispatch(new CreateComment(payload));
    this.commentFormData = ''
    }

  cancel(){
    this.commentFormData = '';

  }

}
