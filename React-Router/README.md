# React-Router

路由：根据不同的页面地址，展示不同的组件

url地址组成：
1. 协议名(schema)
2. 主机名(host)：ip地址|预设值：localhost|域名
3. 端口号(port)
4. 路径(path)：/xxx/xxx
5. 查询字符串(query string)：?key=value&key=value
6. 哈希(hash、锚点)

两种路由模式：
1. Hash Router 哈希路由
根据url地址中的哈希值来确定显示的组件。因为hash值变化，不会导致页面刷新，该模式兼容性好。
`location`中可以查到当前的hash值。

2. Browser History Router 浏览器历史路由
HTML5新增了History API，浏览器可以改变路径而不刷新页面。根据页面路径决定渲染的组件。

`history.length`: 获取历史记录的数量

`history.pushState()`: 历史记录栈增加一条新记录

`history.replaceState()`: 将当前指向的历史记录替换为某个记录