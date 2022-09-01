import { Box } from "@chakra-ui/react";
import { UserIcon } from "../../tools/svg/Svg";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  replies,
  currentUserId,
  deleteComment,
  updateComment,
  activeComment,
  addComment,
  setActiveComment,
  parentId = null
}) => {
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId;
  const canDelete = currentUserId === comment.userId;
  const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comment.id;
  const isEditing = activeComment && activeComment.type === 'editing' && activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;

  return (
    <>
      <Box pb="1" maxW="sm" w="100%">
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="#DDDDDD">
          <Box p="4">
            <Box display="flex" w="100%" alignItems="center">
              <Box>
                <UserIcon w={6} h={6} />
              </Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
                pl="2"
              >
                {comment.username}
              </Box>
            </Box>
            <Box pt="2">
              {!isEditing && <Box as="span" fontSize="sm">
                {comment.body}
              </Box>}
              {isEditing && (
                <CommentForm hasCancelButton initialText={comment.body}
                handleSubmit={(text) => updateComment(text, comment.id)}
                handleCancel={()=> setActiveComment(null)}
                />
              )}
            </Box>
            <Box display="flex" justifyContent="flex-end">
              {canReply && (
                <Box
                  mt="1"
                  fontWeight="semibold"
                  fontSize="xs"
                  pr="1"
                  onClick={() =>
                    setActiveComment({ id: comment.id, type: "replying" })
                  }
                >
                  RESPONDER
                </Box>
              )}
              {canEdit && (
                <Box mt="1" fontWeight="semibold" fontSize="xs" pr="1"  onClick={() =>
                  setActiveComment({ id: comment.id, type: "editing" })
                }>
                  EDITAR
                </Box>
              )}
              {canDelete && (
                <Box
                  mt="1"
                  fontWeight="semibold"
                  fontSize="xs"
                  pr="1"
                  onClick={() => deleteComment(comment.id)}
                >
                  ELIMINAR
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        {isReplying && (
          <CommentForm handleSubmit={(text)=> addComment(text, replyId)}/>
          )}
        {replies?.length > 0 && (
          <Box pt="2" pl="5">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                replies={[]}
                currentUserId={currentUserId}
                deleteComment={deleteComment}
                updateComment={updateComment}
                addComment={addComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                parentId={comment.id}
              />
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};
export default Comment;
