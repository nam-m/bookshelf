function updateObjectInArray(array, id, key, newValue) {
  return array.map(item => {
    if (item.id === id) {
      return { ...item, [key]: newValue };
    }
    return item;
  });
}

export default updateObjectInArray;