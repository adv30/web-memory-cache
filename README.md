# web-memory-cache

一个用来临时缓存数据的内存池子

## 特性

该项目暂不支持持久化,设计之初的目的是为了解决前端项目中某些对象的 get 属性被频繁调用,造成性能降低

- 特性 1
- 特性 2

## 如何修改本项目为你自己的项目

```shell
git clone https://github.com/adv30/web-memory-cache.git web-memory-cache
cd web-memory-cache
# 安装依赖
npm i
# 开始开发
npm start
# 修改 package.json 里面的项目名和简介
# 修改 README.md 文件内容
# 修改 远程仓库的地址
git remote set-url origin <your-git-url>
```

## 如何安装

```shell
npm i web-memory-cache
```

## 如何使用

```typescript
import webMemoryCache from 'web-memory-cache'

webMemoryCache.add({ aa: 'aaaa' }, 'a')
webMemoryCache.add({ bb: 'bbbb' }, 'b')
```

## API

```typescript
add(el: any, key: string, life: number = this.life)
get<T>(key: string, continueLife: boolean = true): T | null
gc()
remove(key: string)
keyToGc(key: string)
gcInterval: number
life: number = 10
```

这里列出所有的 API，如果有很多的话，建议这里只写索引，具体的参数信息可以导航到 docs 目录下的文件

## 如何开发

```shell
yarn
yarn start
```

本项目采用[prettier](https://prettier.io/)来统一代码风格，并且会在`pre-commit`前自动 format 你本次提交的代码，推荐你在你的编辑器里安装 prettier 插件，并且开启保存文件就自动 format 选项，这样可以在开发的时候，就能自动 format

build
ci
chore
docs
feat
fix
perf
refactor
revert
style
test

本项目采用[git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) 工作流，请按照 git flow 工作流来提交合并代码

推荐使用`yarn commit`来代替`git commit`作为格式化 commit 信息的工具

```shell
yarn commit
```

### 如何打包发布

```shell
cd webMemoryCache;
# 自动打tag和生成changelog,并修改package.json
npm run release
npm publish
```
