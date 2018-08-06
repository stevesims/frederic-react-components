import * as exports from '.';

describe('rowsFromArray', () => {
  it('works as expected', () => {
    const { rowsFromArray } = exports;
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', heading: 'Two', transform: () => 'two' },
      { key: 'three', heading: 'Three' },
    ];
    const array = [
      {},
      { one: 'test', two: 'test' },
    ];
    
    const rows = rowsFromArray(array, fields, false);
    expect(rows).toEqual([['-', 'two', '-'], ['test', 'two', '-']]);
  });
});

describe('rowsFromObject', () => {
  it('works as expected', () => {
    const { rowsFromObject } = exports;
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', heading: 'Two', transform: () => 'two' },
    ];
    const object = { one: 'test', two: 'test' };    
    const skipEmptyValues = true;
    const rows = rowsFromObject(object, fields, skipEmptyValues);

    expect(rows).toEqual({
      rows: [
        ['One', 'test'],
        ['Two', 'two'],
      ],
      names: [
        'one',
        'two',
      ],
    });
  });
});

describe('titlesFromFields', () => {
  it('works as expected', () => {
    const { titlesFromFields } = exports;
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', title: 'Two' },
    ];
    const result = titlesFromFields(fields);
    expect(result).toEqual(['One', 'Two']);
  });
});

describe('keysFromFields', () => {
  it('works as expected', () => {
    const { keysFromFields } = exports;
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', title: 'Two' },
    ];
    const result = keysFromFields(fields);
    expect(result).toEqual(['one', 'two']);
  });
});

describe('arrayHasValueForKeys', () => {
  it('returns true when expected', () => {
    const { arrayHasValueForKeys } = exports;
    const keys = ['one', 'two'];
    const array = [{ one: 'test', two: 'test' }];
    const result = arrayHasValueForKeys(array, keys);
    expect(result).toBe(true);
  });

  it('returns false when expected', () => {
    const { arrayHasValueForKeys } = exports;
    const keys = ['one', 'two'];
    const array = [{}];
    const result = arrayHasValueForKeys(array, keys);
    expect(result).toBe(false);
  });
});

describe('objectHasValueForKeys', () => {
  it('returns true when expected', () => {
    const { objectHasValueForKeys } = exports;
    const keys = ['one', 'two'];
    const item = { one: 'test', two: 'test' };
    const result = objectHasValueForKeys(item, keys);
    expect(result).toBe(true);
  });

  it('returns false when expected', () => {
    const { objectHasValueForKeys } = exports;
    const keys = ['one', 'two'];
    const item = {};
    const result = objectHasValueForKeys(item, keys);
    expect(result).toBe(false);
  });
});
