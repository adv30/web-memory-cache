/**
 * 瞬态缓存
 * 1. 当下次取值的key不是上一次的key时,清除掉上一次的key
 * 2. 当超时一段时间(50ms)时,清除掉所有的key
 * 3. 具体的取值对象是保存对象还是通过资源池去取(一个方法?)需要考虑
 */
class MomentCache {
    private beforeElement: any = null
    private beforeKey: string = ''
    private beforeVal: any = undefined
    private beforeTime: number = 0
    private loseTime: number = 50

    public get(el: any, key: string) {
        if (
            this.beforeElement === null ||
            this.beforeKey !== key ||
            el.id !== this.beforeElement.id ||
            new Date().getMilliseconds() - this.beforeTime > this.loseTime
        ) {
            this.save(el, key)
        }
        this.beforeTime = new Date().getMilliseconds()
        return this.beforeVal
    }

    private save(el: any, key: string) {
        this.beforeElement = el
        this.beforeKey = key
        this.beforeVal = el[key]
        this.beforeTime = new Date().getMilliseconds()
    }
}

export default MomentCache
