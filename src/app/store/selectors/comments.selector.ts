import { createSelector } from '@ngrx/store';
import { getCommentState } from '../reducers';
import { getAllComments } from '../reducers/comment.reducers';

export const getComments = createSelector(getCommentState, getAllComments);
