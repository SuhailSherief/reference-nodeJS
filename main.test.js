import {test, expect } from 'vitest';

import { add } from './sum';

test('sum of array', () => {
    expect(add([1,2,2,1])).toBe(7)
})