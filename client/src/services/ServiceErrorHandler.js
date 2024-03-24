const responseErrorHandler = (response) => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
};

export default responseErrorHandler;
