const getLastAndRemainingNames = (fullName) => {
  const nameParts = fullName.trim().split(/\s+/);
  const lastName = nameParts.pop();
  const remainingNames = nameParts.join(' ');
  return {lastName, remainingNames};
}

const sortByAuthor = (firstAuthor, secondAuthor) => {
  const firstAuthorNames = getLastAndRemainingNames(firstAuthor);
  const secondAuthorNames = getLastAndRemainingNames(secondAuthor);

  return firstAuthorNames.lastName.localeCompare(secondAuthorNames.lastName) 
    || firstAuthorNames.firstName.localeCompare(secondAuthorNames.firstName);
}

export default sortByAuthor;
