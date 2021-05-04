export const executeFetch = async (url = '', options = {}) => {
  const request = new Request(url, options);
  return fetch(request)
    .then(response => response?.json() || null);
}

export const getStartDate = month => {
  let format = '';

  if (month) {
    const day = new Date().getDay();
    const year = new Date().getFullYear();
    format = `${month}/${day}/${year}`;
  }
  
  return format;
}

export const getCategoriesString = (selectedCategories,  categoryOptions) => {
  return selectedCategories.map(idx => categoryOptions[parseInt(idx)]).join(',');
}

export const enumerate = (items, page, limit) => {
  return items.map((item, i) => {
    const offset = ((page - 1) * limit) + i + 1;
    item.num = offset;
    return item;
  });
}

export const getStorageValue = (key) => {
  let data = {};
  try {
    data = JSON.parse(localStorage.getItem(key));
  } catch {}
  return data;
}

export const setStorageValue = (key, obj) => {
  return localStorage.setItem(key, JSON.stringify(obj));
}

export const deleteStorageValue = (key) => {
  return localStorage.removeItem(key);
}
