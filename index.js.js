//## topic  are queue 

/*let queue = []
let presentSize = queue.length
let maxSize = 5;

function enqueue(newVal) {
  if (presentSize >= maxSize) {
    alert("queue is already full");
  } else {
    queue[presentSize] = newVal;
    presentSize++;
  }

}
function display() {
  console.log(queue)
}
function dequeue(){
  if(presentSize>0){
    for(let i=0; i<queue.length; i++){
      queue[i]=queue[i+1]

    }
    presentSize--;
    queue.length=presentSize;
  }else{
    alert("queue is empty ")
  }
}
 enqueue(10)
 enqueue(20)
 enqueue(30)
 enqueue(40)*/

//  display();


// let drawer = [];
// let currentSize = drawer.length;
// let maxSize = 4;

// function endrawer(newPlat){
//    if(currentSize>=maxSize){
//     alert("Drawer is full")
//   }else{
//     drawer[currentSize]=newPlat
//     currentSize++
//   }

// }
/*function endrawerWithBtn() {
  let newVal = document.getElementById("qEl").value;
  if (currentSize >= maxSize) {
    alert("Drawer is full")
  } else {
    drawer[currentSize] = newVal
    currentSize++
  }

}
function display() {
  console.log(drawer)
}
function dedrawer() {
  if (!isempty()) {
    for (let i = 0; i < drawer.length; i++) {
      drawer[i] = drawer[i + 1]
    }
    currentSize--;
    drawer.length = currentSize
  } else {
    alert("drawer is empty")
  }
}
function rear() {
  if (!isempty()) {
    console.log(drawer[currentSize - 1])
  } else {
    alert("drawer is empty")

  }
}
function front() {
  if (!isempty()) {
    console.log(drawer[0])
  } else {
    alert("drawer is empty")

  }
}
function isempty() {
  if (currentSize <= 0) {
    return true
  } else {
    return false
  }
}
// endrawer(10)
// endrawer(20)
// endrawer(59)
// front()
// rear()
// display()*/


//##  circular queue  

/*class queue {
  constructor(size) {
    this.max = size;
    this.items = new Array(size)
    this.currentSize = 0
    this.rear = -1
    this.front = -1

  }
   enqueue(val) {
    if (this.currentSize != this.max) {
      if (this.rear == this.max - 1) {
        this.rear = 0
      } else {
        this.rear++
      }
      this.items[this.rear] = val;
      this.currentSize++;
      if ((this.front == -1)) {
        this.front = this.rear;
      }
    }
  }
  dequeue(){
    if(this.currentSize!=0){
      this.items[this.front]=null;
      if(this.front==this.max-1){
        this.front=0
      }else{
        this.front++;
      }
      this.currentSize--;
    }else{
      this.front-1;
      this.rear-1;
      alert("Queue is empty")
    }
  }

}
 let  Queue=new queue(5);*/




//## topic will be discussed a liner search 


//## today discssed topic s bainry search with itrative mode

//  let data =[3,5,7,9,10,23]
//  let find=9;
//  let start=0;
//  let end=data.length-1;
//  let pos=undefined;
//  while(start<=end){
//   let mid=Math.floor((start+end)/2)
//   // console.log(data[mid]);
//   if(data[mid]===find){
//     pos=mid;
//     break;
//   }else if(data[mid]<find){
//     start=mid+1
//   }else{
//     end=mid-1
//   }

//  }
//  console.log(pos);

//  function BinarySearch(){
//  let data =[3,5,7,9,10,23]
//  let find=document.getElementById('ap').value;
//  let start=0;
//  let end=data.length-1;
//  let pos=undefined;
//  while(start<=end){
//   let mid=Math.floor((start+end)/2)
//    console.log(data[mid]);
//   if(data[mid]==find){
//     pos=mid;
//     break;
//   }else if(data[mid]<find){
//     start=mid+1
//   }else{
//     end=mid-1
//   }


//  }

//  console.log(pos);
//  if(!pos){
//   alert("Element not found")
//  }else{
//   alert("Element pos is  "+ pos )
//  }
// }

//## linear search 

// let data=[12,43,32,55,775]
// let find=55;
// let pos=undefined;
// for(let i=0;i<=data.length-1;i++){
//   if(data[i]==find){
//     pos=i;
//     break;
//   }

// }
// console.log(pos)

//## Recursive approch with binary search 

// let data = [10, 20, 30, 40, 50,70,80]
// let start = 0;
// let end = data.length - 1
// let find =50
// let positoin = undefined;
// function RecursiveBinary(data, start, end) {
//   mid = Math.floor((start + end) / 2)
//   if (data[mid] === find) {
//     positoin = mid;
//     return true
//   } else if (data[mid] < find) {
//     RecursiveBinary(data, mid + 1, end)
//   } else {
//     RecursiveBinary(data, start, mid - 1)
//   }
// }
// RecursiveBinary(data, start, end)
// console.log(positoin)

//
//## Selactoin sort with js 

// let items = [54, 23, 9, 13, 44, 56]
// function SelactoinSort(data) {
//   let minId
//   for (let i = 0; i < data.length; i++) {
//     minId = i
//     for (let j = i + 1; j < data.length; j++) {
//       if (data[j] < data[minId]) {
//         minId = j
//       }
//     }
//     let temp = data[minId]
//     data[minId] = data[i]
//     data[i] = temp

//   }


// }
// SelactoinSort(items)
// console.log(items)

// let arr = [85, 88, 95, 56, 4, 65, 7, 89]
// function ArrSort(data) {
//   let minId;
//   for (let i = 0; i < data.length; i++) {
//     minId = i;
//     for (let j = i + 1; j < data.length; j++) {
//       if (data[j] < data[minId]) {
//         minId = j
//       }
//     }
//     let temp = data[minId]
//     data[minId] = data[i]
//     data[i] = temp
//   }
// }
// ArrSort(arr)
// console.log(arr)


//## sorting in arry 

// let data = [43, 65, 33, 80, 80]
// for (i = 0; i < data.length; i++) {
//   for (j = 0; j < data.length; j++) {
//     if (data[j] > data[j + 1]) {
//       let temp = data[j + 1]
//       data[j + 1] = data[i]
//       data[i] = temp;
//     }
//   }
// }
// console.log(data)


//## selectoiin order in disending sorting

// let data=[23,55,487,899,65,4] 
// function SelactoinSort(data){
//   let minId;
//   for(let i=0; i<data.length;i++){
//     minId=i
//     for(let j=i+1; j<data.length;j++){
//     if(data[j]>data[minId]){
//       minId=j;

//     }
//   }
//   let temp=data[minId]
//   data[minId]=data[i]
//   data[i]=temp
//   }

// }
// SelactoinSort(data)
// console.log(data)


//## insertoin sort in arr

// let arr=[24,65,77,8,86,88,80]
// function insertoinSort(data){
//   let i,current,j;
//   for(i=1;i<data.length;i++){
//     current=data[i];
//     j=i-1
//     while(j>=0 && data[j]>current){
//       data[j+1]=data[j]
//       j=j-1
//     }
//     data[j+1]=current

//   }
// }
// insertoinSort(arr);
// console.log(arr);         


//## find even value from array make double of every element ad find 

// arry length manualy 
// let data=[23,4,7,55,65,77,24,88,64,20]
// let evenArray =[]
// let count=0
// for(let i=0; i<data.length; i++){


//   if(data[i]%2==0){
//     evenArray.push(data[i])*2
//     count++;

//   }
// }

// console.log(count)
// console.log(evenArray)

//## find a odd no.

// let data = [12, 33, 44, 55, 75, 80]
// let oddArray = []
// let count = 0;
// for (let i = 0; i < data.length; i++) {
//   if (data[i] % 2 !== 0) {
//     oddArray.push(data[i])
//     count++;
//   }
// }
// console.log(count)
// console.log(oddArray)

//
//## Anagram string

// function checkanagram(str1, str2){
//   let objstr1={};
//   if(str1.length!==str2.length){
//     return false
//   }
//   for(ch of str2){
//     objstr1[ch]=(objstr1[ch]||0)+1;
//   }
//  for(ch of str1){
//   if(!objstr1[ch]){
//     return false
//   }
//   objstr1[ch]--;
//  }
//  return true
// }
// console.log(checkanagram("hello","ellh"))

// function checkanagram(str1,str2){
//   let objstr1={}
//   if(str1.length!==str2.length){
//     return false
//   }
//   for(ch of str2){
//     objstr1[ch]=(objstr1[ch]||0)+1
//   }
//   for(ch of str1){
//     if(!objstr1[ch]){
//       return false
//     }
//     objstr1[ch]--;

// }
// return true
// }
// console.log(checkanagram("hello","elloh"))


//## Palendrom str

// function Palendrom(data){
//   let start=0;
//   let end=data.length-1;
//   let result=true;
//   while(start<end){
//     if(data[start]!=data[end]){
//       result=false;
//     }
//     start++;
//     end--
//   }
//   return result
// }
// let str="bob"
// console.log(Palendrom(str))


//## Msximum occuring character in string

// let str = "aabbbc";
// let strobj = {}
// let maxkey = "";
// for (let i = 0; i < str.length; i++) {
//   let key = str[i]
//   if (!strobj[key]) {
//     strobj[key] = 0;
//   }
//   strobj[key]++
//   if (maxkey == '' || strobj[key] > strobj[maxkey]) {
//     maxkey = key
//   }
// }
// console.log(maxkey)
// console.log(strobj)


//## Minimum  occuring charecter in string

// let str="aabbc"
// let strobj={}
// let minkey="";
// for(let i=0; i<str.length; i++){
//   let key=str[i]
//   if(!strobj[key]){
//     strobj[key]=0;
//   }
//   strobj[key]++
//   if(minkey==''||strobj[key]<strobj[minkey]){
//     minkey=key
//   }
// }
// console.log(minkey)
// console.log(strobj)


// ## object(Hash Table) DS in js

// let data={
//   name:'anil',
//   age:28,
//   mail:"abc@test.com",
//   getName:function(){
//    return this.name;

// }
// }
// data.contect=123456;
// delete data.name
// console.log(data)
// data.name="arun"
// for(x in data){
//   console.log(data[x])
// }
//ager hme iski sari properties nikalni ho to ham kya krenge 
// console.log(Object.keys(data))
//  console.log(Object.values(data))
//  console.log(Object.entries(data))


//## Map data structure

// let data = new Map([
//   ['arvind', 'anil'],
//   [true,'bool key'],
//   [100,'hundred']
// ])
//ager value add kernni h to hum iska use krenge 
// data.set('color','green')
// console.log(data)
// console.log(data.has(100))
// console.log(data.get(100))
// delete data.set()
// data.clear()
// console.log(data)

// console.log(data.size)
// for(x of data){
//   console.log(x[1])
// }
//  data.forEach((val,key)=>{
//   console.log(key)
//  })

//## Set in dsa in js
//repetatoin not allowed

// let data= new Set(["anil","arbind","pancaj","anil"])
// data.add('barnil')
// console.log(data.has("anil"))
// data.delete("anil")
//loops ka lia 
// for(x of data){
//   console.log(x)
// }
// data.forEach((val)=>{
//   console.log(val)
// })
// console.log(data)

//## liked list in js 
//linked list me hma ye dhyan rakhna chahiye ki head , tail 

class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size=1;
  }
  appendNode(nodedata){
    let newNode = {
      value: nodedata,
      next: null
    };
    this.tail.next=newNode;
    this.tail=newNode
    this.size+=1

  }
}
let list = new List(200);
list.appendNode(300)
console.log(list);