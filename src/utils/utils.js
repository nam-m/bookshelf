export function updateObjectInArray(array, id, key, newValue) {
  return array.map((item) => {
    if (item.id === id && item.value !== newValue) {
      return { ...item, [key]: newValue };
    }
    return item;
  });
}

export function getObjectValueinArray(array, id, key) {
  return array.find((item) => item.id === id)[key];
}
