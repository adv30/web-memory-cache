import Pool from '../index'

const obj = { aa: 'aaa' }
test('Pool.get() and Pool.get()', () => {
    Pool.add(obj, 'a')
    expect(Pool.get('a')).toBe(obj)
})

test("Pool.remove('a')", () => {
    Pool.remove('a')
    expect(null).toBe(Pool.get('a'))
})
