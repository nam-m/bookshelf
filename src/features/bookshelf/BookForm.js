import React, { forwardRef, useState } from "react";
import styled from 'styled-components/macro';
import CreateButton from "../../components/common/CreateButton";

const BookForm = forwardRef(function BookForm({addBook, setAddBook}, ref) {
  // State and set state of form input fields
  const [form, setForm] = useState({
    book: "",
    author: ""
  });

  // Error state and set state when input is invalid
    const [error, setError] = useState({
      book: "",
      author: ""
    });

  // Update input fields onChange
  const onUpdateForm = (e) => {
    const updateFormState = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(updateFormState);
  }

  const handleSubmit = (e) => {
    // Prevent default submit
    e.preventDefault(); 

    console.log(JSON.stringify(form, null, 2));

    // Reset all fields in form
    setForm({
      book: "",
      author: ""
    });
    // Set addBook state to false to trigger useClickOutside in App.js
    setAddBook(false);
  };

  const authorValidator = (e) => {
    const re = new RegExp(/^[a-zA-Z.\-' ]+$/);
    if (!e.target.value)
      setError({
        ...error, 
        [e.target.name]: "*Author is required"
      });
    else if (!re.test(e.target.value))
      setError({
        ...error, 
        [e.target.name]: "*Name must not contain digits or special characters"
      });
    else
      setError({...error, [e.target.name]: ""});
  }

  return (addBook) ? (
    <Wrapper ref={ref}>
      <Form 
        action="https://httpbin.org/post" 
        method="post"
        // Open a new page on submit
        target="_blank"
        noValidate
        onSubmit={(e) => handleSubmit(e)}
      >
        <Row>
          <BookLabel htmlFor="book">Book</BookLabel>
          <BookInput 
            type="text" 
            id="book" 
            name="book"
            value={form.book}
            onChange={e => onUpdateForm(e)}
            autoFocus
            >
          </BookInput>
          {error.book && 
            <ErrorMessage htmlFor="error">
              {error.book}
            </ErrorMessage>
          }
        </Row>
        <Row>
          <AuthorLabel htmlFor="author">Author</AuthorLabel>
          <AuthorInput 
            type="text" 
            id="author" 
            name="author"
            value={form.author}  
            onChange={e => {
              onUpdateForm(e);
              authorValidator(e);}}
          >
          </AuthorInput>
          {error.author && 
            <ErrorMessage htmlFor="error">
              {error.author}
            </ErrorMessage>
          }
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

const ErrorMessage = styled.label`
  font-size: 0.875rem;
  color: red;
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