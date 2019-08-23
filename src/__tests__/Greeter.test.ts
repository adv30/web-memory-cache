import Pool from '../index'

const obj = { aa: 'aaa' }
test('My Pool.add() and Pool.get()', () => {
    Pool.add(obj, 'a')
    expect(Pool.get('a')).toBe(obj)
})

test('setTimeout 4000ms Pool.get', () => {
    Pool.remove('a')
    expect(null).toBe(Pool.get('a'))
})
