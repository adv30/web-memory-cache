import Pool from '../index'

const obj = { aa: 'aaa' }
Pool.add(obj, 'a')

Pool.keyToGc('a')
console.log('Pool.gcKey 111::', Pool.gcKey)
Pool.gc()
console.log('Pool.gcKey 222::', Pool.gcKey)
test('Pool.gc() after', () => {
    expect(null).toBe(Pool.get('a'))
})
