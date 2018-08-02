export const objectHasValueForKeys = (item = {}, keys = []) => Object.entries(item).reduce(
  (hasValue, [key, value]) => hasValue || (keys.includes(key) && (value !== undefined)), false,
);

export const arrayHasValueForKeys = (array = [], keys = []) => ((array.length > 0) && array.reduce(
  (hasValue, item) => hasValue || objectHasValueForKeys(item, keys), false,
));

export function keysFromFields(fields) {
  return fields.map(field => field.key);
}

export const titlesFromFields = fields => fields.map(field => field.heading || field.title);

export const rowsFromArray = (array, fields, skipEmptyRows) => {
  const keys = keysFromFields(fields);

  return array.reduce((rows, item) => {
    if (!skipEmptyRows || objectHasValueForKeys(item, keys)) {
      rows.push(
        fields.map(({ key, transform = result => (result || '-')}) => transform(item[key], item)),
      );
    }

    return rows;
  }, []);
};

export const rowsFromObject = (object, fields) => fields.reduce(
  (rows, { key, heading, transform = (result = '-') => result }) => {
    const result = transform(object[key], object);

    if (result !== null) {
      rows.push([heading, result]);
    }

    return rows;
  },
  [],
);
