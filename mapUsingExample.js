let original = new Map([
  [1, 'one']
])
let original1=new Map([
	[2,'two']])
let newMap=new Map();
newMap.set(1,'One')
newMap.set(2,'two')

let clone =new Map(original,original1);


for (let [key, value] of clone) {
  console.log(key + ' = ' + value)
}
for (let [key, value] of newMap) {
  console.log(key + ' = ' + value)
} 


