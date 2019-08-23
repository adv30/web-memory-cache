import Pool from '../index'

const obj = { aa: 'aaa' }
Pool.add(obj, 'a')
Pool.remove('a')

test("Pool.remove('a')", () => {
    expect(null).toBe(Pool.get('a'))
})
