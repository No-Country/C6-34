import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getComments, createComment, deleteComment as deleteCommentApi, updateComment as updateCommentApi} from "./api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({ currentUserId }) => {
  const [comments, setComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = comments.filter((comment) => comment.parentId === null);

  const getReplies = commentId => {
    return comments
      .filter(comment => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  const addComment = (text, parentId) => {
    createComment(text,parentId).then(comment => {
      setComments([comment, ...comments])
      setActiveComment(null)
    })
  
  }

  const deleteComment = (commentId) =>{
    deleteCommentApi(commentId).then(()=>{
      const updateComments = comments.filter(comment => comment.id !== commentId)
      setComments(updateComments)
    })
  }

  const updateComment = (text, commentId) =>{
    updateCommentApi(text,commentId).then(()=>{
      const updateComments = comments.map(comment => {
        if (comment.id === commentId ){
          return {...comment, body: text}
        }
        return comment;
      })
      setComments(updateComments)
      setActiveComment(null)
    })
  }

  useEffect(() => {
    getComments().then((data) => {
      setComments(data);
    });
  }, []);

  return (
    <>
      <CommentForm handleSubmit={addComment}/>
      <Box fontSize="sm" w="100%">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
            deleteComment={deleteComment}
            updateComment={updateComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
          />
        ))}
      </Box>
      
    </>
  );
};
export default Comments;
