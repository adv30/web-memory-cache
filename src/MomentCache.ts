import Pool from './Pool'

/**
 * 瞬态缓存
 * 1. 当下次取值的key不是上一次的key时,清除掉上一次的key
 * 2. 当超时一段时间(50ms)时,清除掉所有的key
 * 3. 具体的取值对象是保存对象还是通过资源池去取(一个方法?)需要考虑
 */
class Momentcache {}

export default Momentcache
