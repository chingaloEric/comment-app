import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../modules/comment.module'; 
import { Store } from '@ngrx/store';
import { Appstate } from '../../../store/reducers';
import { DeleteComment, ShowDeleteConfirmationDialog } from '../../../store/actions/comment.actions';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.css']
})
export class DeleteCommentComponent implements OnInit {
  deleting = false;
  @Input() comment: Comment;
  @Output() onCommentDeleteCancel = new EventEmitter<boolean>();
  constructor(private store : Store<Appstate>) { }

  ngOnInit() {

  }

  deleteComment(){
    this.deleting = true;
    const payload = this.comment
    this.store.dispatch(new DeleteComment(payload));
        
  }

  cancel(){
    this.store.dispatch(new ShowDeleteConfirmationDialog(this.comment))
  }
}
