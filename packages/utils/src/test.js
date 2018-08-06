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
        ['Two', 'two']
      ],
      names: [
        'one',
        'two',
      ]
    });
  });
});
