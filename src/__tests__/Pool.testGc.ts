import Pool from '../index'

const obj = { aa: 'aaa' }
Pool.add(obj, 'a')

Pool.keyToGc('a')
Pool.gc()
test('Pool.gc() after', () => {
    expect(null).toBe(Pool.get('a'))
})
