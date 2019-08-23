import Pool from '../index'

const obj = { aa: 'aaa' }
Pool.add(obj, 'a')

test('Pool.get()', () => {
    expect(Pool.get('a')).toBe(obj)
})
