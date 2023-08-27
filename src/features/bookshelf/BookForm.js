import React, { forwardRef, useState } from "react";
import styled from 'styled-components/macro';
import CreateButton from "../../components/common/CreateButton";

const BookForm = forwardRef(function BookForm({addBook}, ref) {
  const [bookInput, setbookInput] = useState("");
  const handleSubmit = (e) => {
    // Prevent default submit
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  };

  // const checkValidity = () => {
  //   if ()
  // };

  return (addBook) ? (
    <Wrapper ref={ref}>
      <Form 
        action="https://httpbin.org/post" 
        method="post"
        /* Turn off form automatic error msg*/
        noValidate
        onSubmit={handleSubmit}
      >
        <Row>
          <BookLabel htmlFor="book">Book</BookLabel>
          <BookInput 
            type="text" 
            id="book" 
            name="book"
            value={bookInput}
            onChange={e => setbookInput(e.target.value)}
            >
          </BookInput>
        </Row>
        <Row>
          <AuthorLabel htmlFor="author">Author</AuthorLabel>
          <AuthorInput 
            type="text" 
            id="author" 
            name="author"  
            pattern="^[a-zA-Z\-\s]+$"
            required
          >
          </AuthorInput>
        </Row>
        <Row>
          <NoteLabel 
            htmlFor="notes"
          >
            Your Notes
          </NoteLabel>
          <NoteArea 
            as="textarea"
            id="notes" 
            name="notes" 
            rows="5" cols="33"
          >
          </NoteArea>
        </Row>
        <Row>
          <SubmitButton 
            type="submit"
          >
            Add book
          </SubmitButton>
        </Row>
      </Form>
    </Wrapper>
  ) : null;
});

const Wrapper = styled.div`
  position: absolute;
  inset: 18%;
  border-radius: 4px;
  background-color: white;
  padding: 64px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BookLabel = styled.label``;

const Input = styled.input`
  line-height: 1.5rem;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: hsl(185deg, 10%, 95%);

  /* &:invalid {
    outline: 2px solid red;
  } */
`;

const BookInput = styled(Input)``;

const AuthorLabel = styled.label``;

const AuthorInput = styled(Input)``;

const NoteLabel = styled.label``;

const NoteArea = styled(Input)`
  resize: none;
`;

const SubmitButton = styled(CreateButton)`
  align-self: flex-end;
`;

export default BookForm;