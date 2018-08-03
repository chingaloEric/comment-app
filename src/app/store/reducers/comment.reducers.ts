import * as fromAction from '../actions/comment.actions'
import { Comment } from '../../comment-module/modules/comment.module';

export interface CurrentState{
    comments: Comment[],
    loading: boolean,
    loaded: boolean
}

export const initialState: CurrentState = {
    loaded: false,
    loading: false,
    comments: []
}

export function CommentReducer(
    state: CurrentState = initialState,
    action: {type: string; payload: any}
){
    switch(action.type){
        case fromAction.CREATE_COMMENT: {
            const comment: Comment = {
                user: 'Eric',
                commentText: action.payload,
                commentId: getRandString(),
                showDate: true,
                //lastUpdate: Date,  --------->work on it
                showEditForm: false,
                showDeleteDialog : false  
            }
            const comments = [...state.comments, comment];
            return {...state, comments};

        };

        case fromAction.EDIT_COMMENT: {
            const newComments = state.comments.map(comment =>{
                if(comment.commentId != action.payload.commentId){
                    return comment;
                }else{
                return {...comment, commentText: action.payload.commentText};
                }
        });
       return {...state, comments: newComments};         
        };

        case fromAction.DELETE_COMMENT: {
        const comment = state.comments.filter(comment => comment.commentId != action.payload.commentId);
        return {...state, comments: comment};

        };
        

        case fromAction.DELETE_CONFIRM: {
            const newComments = state.comments.map(comment =>{
                if(comment.commentId !== action.payload.commentId){
                    return comment;
                }else{
                    return {...comment,
                        showDeleteDialog: !action.payload.showDeleteDialog                     
                    }
                }
        });
       return {...state, comments: newComments};        
        };

        case fromAction.EDIT_COMMENT_FORM: {
            const newComments = state.comments.map(comment =>{
                if(comment.commentId !== action.payload.commentId){
                    return comment;
                }else{
                    return {...comment,
                        showEditForm: !action.payload.showEditForm
                    }
                }
        });
       return {...state, comments: newComments};        
        };

        default: {
            
        }
    }

        return state;

}

function getNewID() {
    var myDate = new Date();
    var varID = myDate.getHours() + "" + myDate.getMinutes() + "" + myDate.getSeconds() + "" + myDate.getMilliseconds();
    if (varID.length > 15) {
        varID = varID.substr(0, 15);
    }
    return varID;
}

function getRandString(){ 
return getNewID();
}

export const getAllComments = (state: CurrentState) => state.comments;