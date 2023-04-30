import { low_bound, low_bound2, low_bound3 } from '../utils/low_bound.js'

describe('low_bound', () => {
  it('No target', () => {
    expect(low_bound([], 1)).toBe(-1)
    expect(low_bound([1, 2, 3], 0)).toBe(0)
    expect(low_bound([1, 2, 3], 4)).toBe(3)
  })
  it('Has target', () => {
    expect(low_bound([1, 2, 3], 1)).toBe(0)
    expect(low_bound([1, 2, 3], 2)).toBe(1)
    expect(low_bound([1, 2, 3], 3)).toBe(2)
    expect(low_bound([1, 2, 4], 3)).toBe(2)
  })
})

describe('low_bound2', () => {
  it('No target', () => {
    expect(low_bound2([], 1)).toBe(-1)
    expect(low_bound2([1, 2, 3], 0)).toBe(0)
    expect(low_bound2([1, 2, 3], 4)).toBe(3)
  })
  it('Has target', () => {
    expect(low_bound2([1, 2, 3], 1)).toBe(0)
    expect(low_bound2([1, 2, 3], 2)).toBe(1)
    expect(low_bound2([1, 2, 3], 3)).toBe(2)
    expect(low_bound2([1, 2, 4], 3)).toBe(2)
  })
})

describe('low_bound3', () => {
  it('No target', () => {
    expect(low_bound3([], 1)).toBe(-1)
    expect(low_bound3([1, 2, 3], 0)).toBe(0)
    expect(low_bound3([1, 2, 3], 4)).toBe(3)
  })
  it('Has target', () => {
    expect(low_bound3([1, 2, 3], 1)).toBe(0)
    expect(low_bound3([1, 2, 3], 2)).toBe(1)
    expect(low_bound3([1, 2, 3], 3)).toBe(2)
    expect(low_bound3([1, 2, 4], 3)).toBe(2)
  })
})