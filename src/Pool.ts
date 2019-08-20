import IContainerElement from "./interface/IContainerElement";

class Pool {
    // tslint:disable-next-line:variable-name
    private static _instance: Pool = null as any;
    // tslint:disable-next-line:variable-name
    private _pool: Map<string, any> = new Map();
    // 当前pool中存的值的加入时间戳
    // tslint:disable-next-line:variable-name
    private _modiffTime: Map<string, number> = new Map();
    // 当前pool中存入的值生命时长,ms,如果为负值,那么就长久有效,如果为0,那么取一次就失效,如果大于0,那么就是毫秒数
    // tslint:disable-next-line:variable-name
    private _life: Map<string, number> = new Map();
    // 等待GC的key
    // tslint:disable-next-line:variable-name
    private _gcKey: Set<string> = new Set();
    private constructor() {}

    public static get instance() {
        if (Pool._instance === null) {
            Pool._instance = new Pool();
        }
        return Pool._instance;
    }
    /**
     * 增加一个元素到pool
     * @param el 要增加的元素
     * @param key 要增加的元素的key
     * @param life 此元素的时长
     */
    public add(el: any, key: string, life: number = 50): boolean {
        this._pool.set(key, el);
        this._modiffTime.set(key, new Date().getTime());
        this._life.set(key, life);
        if (this._gcKey.has(key)) {
            this._gcKey.delete(key);
        }
        return true;
    }
    /**
     * 根据key获取某元素
     * @param key 元素的key
     * @param continueLife 是否给元素延续生命
     */
    public get<T>(key: string, continueLife: boolean = true): T | null {
        if (this._gcKey.has(key)) {
            this.remove(key);
            return null;
        }
        if (continueLife) {
            this._modiffTime.set(key, new Date().getTime());
        }
        const el = this._pool.get(key);
        return el ? el : null;
    }

    public remove(key: string) {
        this._pool.delete(key);
        this._life.delete(key);
        this._modiffTime.delete(key);
        this._gcKey.delete(key);
    }

    public keyToGc(key: string) {
        this._gcKey.add(key);
    }
}

export default Pool.instance;
