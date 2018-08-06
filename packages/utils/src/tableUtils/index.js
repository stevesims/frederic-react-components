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

// TODO: ALL THE DOCS
// TODO: SOME TESTS
// Empty values and keys are treated the same
export const rowsFromObject = (object, fields, skipEmptyValues, defaultTransform) => fields.reduce(
  (rows, { key, heading, transform }) => {
    let result;

    // Do we have a specific transform to run?
    if (transform) {
      result = transform(object[key], object);
    // if not, do we have a default transform to run?
    } else if (defaultTransform) {
      result = defaultTransform(object[key], object);
    } else {
      result = object[key];
    }

    // Is the value undefined?
    // This can happen if there;
      // is no property in the object for provided key AND
      // there is no value for a found property in the object
    if (result === undefined) {
      // If it is, normalise it to an empty string so we can decide if we want skip rendering or not
      result = '';
    }

    // Empty values are empty strings (normalised above)
    // We never render null
    if (result !== null && !(skipEmptyValues && result === '')) {
      rows.push([heading, result]);
    }

    return rows;
  },
  [],
);
