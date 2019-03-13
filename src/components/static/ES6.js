//将一个JSON序列化的对象转成URL传输格式的字段 
let params = this.props.navigation.state.params;//{name:"chey", age:22}
let arr = [];
Object.keys(params).forEach(key => {
    arr.push(key + '=' + params[key])
});
let url = arr.join('&')



