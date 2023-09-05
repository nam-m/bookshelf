import React, { forwardRef, useState } from 'react';
import styled from 'styled-components/macro';
import CreateButton from '../../components/common/CreateButton';
import ErrorMessage from '../../utils/FormErrorMessage';

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

  const [submitted, setSubmitted] = useState(false);

  // Update input fields onChange
  const onUpdateForm = (e) => {
    // Perform validation here
    let errorMessage = '';

    if (e.target.value === '') {
      errorMessage = '*' + e.target.name + ' is required';
    }
    else {
      if (e.target.name === 'author') {
        const re = new RegExp(/^[a-zA-Z.\-' ]+$/);
        if (!re.test(e.target.value))
          errorMessage = '*Name must not contain digits or special characters';
      }
    }
     
    setForm({
      ...form,
      [e.target.name]: {
        ...form[e.target.name],
        value: e.target.value,
        error: !!errorMessage,
        message: errorMessage
      }
    });
  }

  const isFormValid = () => {
    return Object.keys(form).reduce((isValid, key) => {
      const field = form[key];
      return isValid && !field.error && field.value !== '';
    }, true);
  }

  const handleSubmit = (e) => {
    // Prevent default submit
    e.preventDefault(); 

    // Set submitted state
    setSubmitted(true);
    
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
    else {
      alert('Invalid form');
      console.log('Invalid form:', form);
    }
      
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
            onClick={() => {
              setForm({
                ...form, 
                book: {
                  ...form.book,
                  dirty: true
                }
              });
            }}
            onChange={e => {
              onUpdateForm(e);
            }}
            >
          </BookInput>
          {
            (submitted && form.book.dirty && form.book.error) 
            &&
            <ErrorMessage message={form.book.message}/>
          }
        </Row>
        <Row>
          <AuthorLabel htmlFor='author'>Author</AuthorLabel>
          <AuthorInput 
            type='text' 
            id='author' 
            name='author'
            value={form.author.value}
            onClick={() => {
              setForm({
                ...form, 
                author: {
                  ...form.author,
                  dirty: true
                }
              });
            }}  
            onChange={e => {
              onUpdateForm(e);
            }}
          >
          </AuthorInput>
          {
            (submitted && form.author.dirty && form.author.error) 
            &&
            <ErrorMessage message={form.author.message}/>
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
            disabled={!isFormValid()}
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