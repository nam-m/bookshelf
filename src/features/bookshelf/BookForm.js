import React, { forwardRef, useState } from 'react';
import styled from 'styled-components/macro';
import CreateButton from '../../components/common/CreateButton';

const BookForm = forwardRef(function BookForm({addBook, setAddBook}, ref) {
  // State and set state of form input fields
  // Error state and set state when input is invalid
    const [form, setForm] = useState({
      book: {
        value: '',
        dirty: false,
        error: false,
        message: ''
      },
      author: {
        value: '',
        dirty: false,
        error: false,
        message: ''
      }
    });

  // Update input fields onChange
  const onUpdateForm = (e) => {
    // Perform validation here
    let errorMessage = '';

    if (e.target.name === 'book') {      
      if (!e.target.value && form[e.target.name].dirty)
        errorMessage = '*Author is required';
    }
    
    else if (e.target.name === 'author') {
      const re = new RegExp(/^[a-zA-Z.\-' ]+$/);
      if (!e.target.value && form[e.target.name].dirty)
        errorMessage = '*Author is required';
      else if (!re.test(e.target.value))
        errorMessage = '*Name must not contain digits or special characters';
    }

    const updateFormState = {
      ...form,
      [e.target.name]: {
        ...form[e.target.name],
        value: e.target.value,
        dirty: true,
        error: !!errorMessage,
        message: errorMessage
      }
    };
      
    setForm(updateFormState);
  }

  const isFormValid = () => {
    const validForm = Object.keys(form).reduce((result, key) => {
      const {dirty, error, value} = form[key];
      return result || (dirty && (error || value === ''));
    }, false);

    return validForm;
  }

  const handleSubmit = (e) => {
    // Prevent default submit
    e.preventDefault(); 
    
    // Reset all fields in form
    if (isFormValid()) {
      console.log('Valid form', form);
      // Reset form
      setForm({
        book: {
          value: '',
          dirty: false,
          error: false,
          message: ''
        },
        author: {
          value: '',
          dirty: false,
          error: false,
          message: ''
        }
      });
    }
    else
      alert('Invalid form', form);
    
    // Set addBook state to false to trigger useClickOutside in App.js
    setAddBook(false);
  };

  

  return (addBook) ? (
    <Wrapper ref={ref}>
      <Form 
        action='https://httpbin.org/post' 
        method='post'
        // Open a new page on submit
        target='_blank'
        noValidate
        onSubmit={(e) => handleSubmit(e)}
      >
        <Row>
          <BookLabel htmlFor='book'>Book</BookLabel>
          <BookInput 
            type='text' 
            id='book' 
            name='book'
            value={form.book.value}
            // onMouseDown={(e) => {
            //   setForm({
            //     ...form, 
            //     book: {
            //       ...form.book,
            //       dirty: true
            //     }
            //   });
            // }}
            onChange={e => {
              onUpdateForm(e);
            }}
            autoFocus
            >
          </BookInput>
          {form.book.error && form.book.dirty &&
            <ErrorMessage htmlFor='error'>
              {form.book.message}
            </ErrorMessage>
          }
        </Row>
        <Row>
          <AuthorLabel htmlFor='author'>Author</AuthorLabel>
          <AuthorInput 
            type='text' 
            id='author' 
            name='author'
            value={form.author.value}  
            onChange={e => {
              onUpdateForm(e);
            }}
          >
          </AuthorInput>
          {form.author.error && form.author.dirty &&
            <ErrorMessage htmlFor='error'>
              {form.author.message}
            </ErrorMessage>
          }
        </Row>
        <Row>
          <NoteLabel 
            htmlFor='notes'
          >
            Your Notes
          </NoteLabel>
          <NoteArea 
            as='textarea'
            id='notes' 
            name='notes' 
            rows='5' cols='33'
          >
          </NoteArea>
        </Row>
        <Row>
          <SubmitButton 
            type='submit'
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