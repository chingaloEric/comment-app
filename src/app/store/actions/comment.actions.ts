import { Comment } from '../../comment-module/modules/comment.module';

//action constants
export const EDIT_COMMENT = '[Comment] Edit Todo';
export const DELETE_COMMENT ='[Comment] Delete Comment';
export const CREATE_COMMENT ='[Comment] Create Comment';
export const DELETE_CONFIRM ='[Dialog] Show Delete Confirmation Dialog';
export const EDIT_COMMENT_FORM ='[Form] Show Edit Comment Form';
//actions creators

export class EditComment{
    readonly type = EDIT_COMMENT;
    constructor(public payload: Comment){}
}

export class DeleteComment{
    readonly type = DELETE_COMMENT;
    constructor(public payload: Comment){}
}

export class CreateComment{
    readonly type = CREATE_COMMENT;
    constructor(public payload: Comment){}
}

export class ShowEditCommentForm{
    readonly type = EDIT_COMMENT_FORM;
    constructor(private payload: Comment){}
}

export class ShowDeleteConfirmationDialog{
    readonly type = DELETE_CONFIRM;
    constructor(private payload: Comment){}
}



export type CommentActions = EditComment | CreateComment | DeleteComment |ShowEditCommentForm | ShowDeleteConfirmationDialog ;