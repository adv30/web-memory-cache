import MomentCache from '../MomentCache'

class TestObj {
    public id = 'aabbb'
    private num = 0

    public get myNum() {
        return this.num++
    }
}
const objA = new TestObj()
const cache = MomentCache

const objB = new TestObj()
objB.id = 'xxxxyyyy'

console.log(objA.myNum)
console.log('objA', cache.get(objA, 'myNum'))
console.log('objA', cache.get(objA, 'myNum'))
console.log('objA', cache.get(objA, 'myNum'))
console.log('objB', cache.get(objB, 'myNum'))
console.log('objB', cache.get(objB, 'myNum'))
console.log('objB', cache.get(objB, 'myNum'))
console.log('objB', cache.get(objB, 'myNum'))
console.log('objB', cache.get(objB, 'myNum'))
console.log('objA', cache.get(objA, 'myNum'))
console.log('objA', cache.get(objA, 'myNum'))
console.log('objA', cache.get(objA, 'myNum'))
console.log('objA', cache.get(objA, 'myNum'))

test('MomentCache', () => {
    expect(null).toBe(null)
})
