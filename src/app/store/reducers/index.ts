import { ActionReducerMap } from '@ngrx/store';
import { CommentReducer } from '../reducers/comment.reducers';
//import { Comment } from '../../app-comment/modules/comment.module';

export interface Appstate{
    comment: any;
}

export const reducers: ActionReducerMap<Appstate> = {
    comment: CommentReducer
}

export const getCommentState = (state: Appstate) => state.comment;


