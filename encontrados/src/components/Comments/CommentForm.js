import { FormControl, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const CommentForm = ({ handleSubmit, hasCancelButton = false,initialText='', handleCancel}) => {
  const [text, setText] = useState(initialText);
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText('');
  };

  const send = (e) =>{
    if (e.keyCode === 13) {
        handleSubmit(text);
        setText('');
    }
  }

  return (
    <>
      <FormControl onSubmit={onSubmit}>
        <Input
          type="text"
          focusBorderColor='white'
          value={text}
          placeholder="Escribe un comentario..."
          _placeholder={{ color: 'gray' }}
          bg="black"
          textColor="white"
          onKeyDown={(e) => send(e)}
          onChange={(e) => setText(e.target.value)}
          mb='1'
        />
         {hasCancelButton && (
            <Button type='button' onClick={handleCancel} colorScheme='gray' size='xs' variant='ghost'>Cancelar</Button>
            
        )}
      </FormControl>
     
    </>
  );
};
export default CommentForm;
