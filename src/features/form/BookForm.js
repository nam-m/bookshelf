import React, { forwardRef, useState } from 'react';
import styled from 'styled-components/macro';

import CreateButton from '../../components/common/CreateButton';
import BookFormRow from './BookFormRow';
import { Book, BookStorage } from '../bookshelf/BookStorage';

const BookForm = forwardRef(function BookForm({bookStorage, setSortBooks, addBook, setAddBook}, ref) {
  // State and set state of form input fields
  // Error state and set state when input is invalid
  const [form, setForm] = useState({
    title: {  
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
    },
    pages: {
      value: '',
      dirty: false,
      error: false,
      message: ''
    },
    image: {
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
    let re;

    if (!e.target.value && e.target.name !== 'image') {
      errorMessage = '*' + e.target.name + ' input is required';
    }
    else if (e.target.name === 'author') {
      re = new RegExp(/^[a-zA-Z.\-' ]+$/);
      if (!re.test(e.target.value))
        errorMessage = '*Name must not contain digits or special characters';
    }
    else if (e.target.name === 'pages') {
      re = new RegExp(/^\d+$/);
      if (!re.test(e.target.value))
        errorMessage = '*Pages must be numbers only';
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
    const checkForm = Object.fromEntries(Object.entries(form).filter(([key]) => key !== 'image'));
    return Object.keys(checkForm).reduce((isValid, key) => {
      return isValid && !checkForm[key].error && checkForm[key].value;
    }, true);
  }

  const checkEmptyField = () => {
    // Create a copy to setForm at the end if any state needs changes
    let formCopy = { ...form };
    let hasEmptyField = false;
    
    for (const key in formCopy) {
      if (!formCopy[key].value && key !== 'image') {
        formCopy[key] = {
          ...formCopy[key],
          error: true,
          message: '*' + key + ' must not be empty'
        }
        hasEmptyField = true;
      }
    }

    if (hasEmptyField) {
      setForm(formCopy);
    }
  }

  const handleSubmit = (e) => {
    // Prevent default submit
    e.preventDefault(); 

    // Set submitted state
    setSubmitted(true);
    
    checkEmptyField();

    // Reset all fields in form
    if (isFormValid()) {
      console.log('Valid form', form);

      //Store new book
      const newBook = new Book(
        form.title.value,
        form.author.value,
        form.pages.value,
        form.image.value 
      );
      
      bookStorage.addBook(newBook);
      setSortBooks(bookStorage.books);

      // Reset form
      setForm({
        title: {
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
        },
        pages: {
          value: '',
          dirty: false,
          error: false,
          message: ''
        },
        image: {
          value: '',
          dirty: false,
          error: false,
          message: ''
        }
      });
      // Set addBook state to false to trigger useClickOutside in App.js to close form
      setAddBook(false);
    }
    else {
      console.log('Invalid form:', form);
    }
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
        <BookFormRow 
          name='title'
          type='text'
          form={form}
          setForm={setForm}
          onUpdateForm={onUpdateForm}
          submitted={submitted}
        />
        <BookFormRow 
          name='author'
          type='text'
          form={form}
          setForm={setForm} 
          onUpdateForm={onUpdateForm}
          submitted={submitted}
        />
        <BookFormRow 
          name='pages'
          type='text'
          form={form} 
          setForm={setForm} 
          onUpdateForm={onUpdateForm}
          submitted={submitted}
        />
        <BookFormRow 
          name='image'
          type='url'
          placeholder='Enter book cover image URL..'
          form={form} 
          setForm={setForm} 
          onUpdateForm={onUpdateForm}
          submitted={submitted}
        />
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
            // disabled={!isFormValid()}
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
  inset: 15%;
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

const Input = styled.input`
  width: 100%;
  line-height: 1.5rem;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: hsl(185deg, 10%, 95%);

  ${p => p.$showError ?
  `
    outline: 1px solid red;
  `
  :
  ``
  };
`;

const NoteLabel = styled.label``;

const NoteArea = styled(Input)`
  resize: none;
`;

const SubmitButton = styled(CreateButton)`
  align-self: flex-end;
`;

export default BookForm;