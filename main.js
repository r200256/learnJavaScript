// Vue.component('button-counter',{
//     data:function(){
//         return{
//             count:0
//         }
//     },
//     template:'<button v-on:click="count++">Счетчик кликов - {{count}}</button>'
// })
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>'
  })
// new Vue({el:'#component-demo'})


//     el: '#demo',
// //     data: {
//       show: true
//     }
//   })

// new Vue({
//     el: '#demo'{

},
//     data: {
//       show: true
//     }
//   })

// var vm= new Vue({
//     el:'#app',
//     data:{
//         firstName:'Foo',
//         lastName:'Bar',
//         // fullName:'FOO BAR'
//     },
//     computed:{
//         fullName:function(){
//             return this.firstName+ '--'+this.lastName
//         }
//     }
    // watch:{
    //     firstName:function(val){
    //         this.fullName=val+' '+this.lastName
    //     },
    //     lastName:function(val){
    //         this.fullName=this.firstName+' '+val
    //     }
    // }
// })

// var app=new Vue({
//     el:'#app',
//     data:{
//         message:'Lorem 2021'
//     }
// })

// var app= new Vue({
//     el:'#app',
//     data:{
//         message:'Привет, Vue!'
//     }
// })

// var vu1=new Vue({
//     data:{
//         a:1
//     },
//     created:function(){
//         console.log('Значение а: '+this.a)
//     }
// })
// vu1.created();
// Vue.component('todo-item',{
//     props:['todo'],
//     template:'<li>{{todo.text}}</li>'
// })
// var app7=new Vue({
//     el:'#app-7',
//     data:{
//         groceryList:[
//             {id:01,text:'Овощи'},
//             {id:11,text:'Сыр'},
//             {id:22,text:'Что там еще едят люди'},
//         ]
//     }
// })
// var app6=new Vue({
//     el:'#app-6',
//     data:{
//         message:'Привет, Vue!!'
//     }
// })
// var app5=new Vue({
//     el:'#app-5',
//     data:{
//         message:'Привет, Vue.js!'
//     },
//     methods:{
//         reverseMessage:function(){
//             this.message=this.message.split('').reverse().join('')
//         }
//     }
// })

// var app4=new Vue({
//     el:'#app-4',
//     data:{
//         todos:[
//             {text:'Изучить JavaScript'},
//             {text:'Изучить Vue'},
//             {text:'Создать что нибудь класное'},
//             {text:'JavaScript'},
//             {text:'JavaScript'}
//         ]
//     }
// })
// var app3=new Vue({
//     el:'#app-3',
//     data:{
//         seen:true
//     }
// })

// var app2=new Vue({
//     el:"#app-2",
//     data:{
//         message:"DATE --> "+new Date().toLocaleString()
//     }
// })

// var appq= new Vue({
//     el:'#app',
//     data:{
//         message:'Привет, Vue!'
//     }
// })

// class CoffeeMachine {
//     _waterAmount = 0;
  
//     set waterAmount(value) {
//       if (value < 0) throw new Error("Отрицательное количество воды");
//       this._waterAmount = value;
//     }
  
//     get waterAmount() {
//       return this._waterAmount;
//     }
  
//     constructor(power) {
//       this._power = power;
//     }
  
//   }
  
//   // создаём новую кофеварку
//   let coffeeMachine = new CoffeeMachine(100);
  
//   // устанавливаем количество воды
//   coffeeMachine.waterAmount = -10;

// function ask(guestion,yes,no){
//     if(guestion) yes()
//     else no()
// }
// function showOk(){
//     console.log("Вы согласны")
// }
// function showCancel(){
//     console.log("Вы отменили выполнение")
// }
// ask(false,showOk,showCancel)
// console.log("Вы согласны")

// const arr=[{name:"Suzanne"},{name:"Jim"},{name:"Trevor"},{name:"Amanda"}]
// console.log(arr)
// console.log(arr.sort((a,b)=>a.name[1]<b.name[1]))

// const arr=[1,2,3,4,5]
// console.log(arr)
// console.log(arr.reverse())
// console.log(arr.sort())

// const arr=new Array(5).fill("a")
// console.log(arr)
// console.log(arr.fill("b",2,4))
// console.log(arr.fill("c",0,2))
// console.log(arr.fill(5.5,-4,-1))

// const arr=[1,5,7]
// console.log(arr)
// arr.splice(1,30,"4","8")
// console.log(arr)
// const arr=[0,1,2,3,4,5]
// console.log(arr)
// arr.copyWithin(2,3,-2)
// console.log(arr)
// arr.copyWithin(0,2,1)
// console.log(arr)
// arr.copyWithin()

// const arr=[1,2,3,4,5]
// a=arr.slice(3)
// console.log(arr)
// console.log(a)
// console.log(arr)
// s=
// console.log(arr.slice(-4,1))
// const arr=new Array(5)
// console.log(arr.length)

// const arr1=[1,2,3,["one","free"]]
// console.log(arr1[3][1])
// console.log(arr1.length[3])

// const arr=new Array(5).fill("Z")
// console.log(arr)
// console.log(arr.fill("b",1))
// x;
// // let x=3;
// var x=3
// console.log(x)

// const f=(function(){
//     let count=0
//     return function(){
//         return `Меня вызвали ${++count} раз(а).`
//     }
// })()
// console.log(f())
// console.log(f())
// console.log(f())
// console.log(f())
// console.log(f())

// let f;
// {
//     let o={note:"Bezopacno"}
//     f=function(){
//         return o
//     }
// }
// let oRef=f()
// oRef.note="Ne covcem bezopacno"

// let globalFunc
// {
//     let blockVar='a'
//     globalFunc=function(){
//         console.log(blockVar)
//     }
// }

// globalFunc()

// {
//     let x={
//         color:"blue"
//     }
//     let y=x
//     let z=3
//     {
//         let x=5
//         console.log(x)
//         console.log(y.color)
//         y.color="red"
//         console.log(z)
//     }
//     console.log(x.color)
//     console.log(y.color)
//     console.log(z)
// }


// {
//     let x="blue"
//     console.log(x)
//     {
//         let x="3"
//         console.log(x)
//     }
//     console.log(x)
// }
// console.log(x)

// console.log("перед блоком")
// {
//     console.log("Vnutri bloka")
//     constx=3
//     console.log(x)
// }
// console.log(`za blokom x=${x}`)


// let user={
//     name:"Irena",
//     age:25,
// }


// function greet(user){
//     console.log(`Hello, ${user.name}`)
// }
// function getBirthYear(user){
//     return console.log(new Date().getFullYear() - user.age)
// }
// greet(user)
// getBirthYear(user)
// console.log(getBirthYear(user))

// const x=3
// function f(){
//     console.log(x);
//     console.log(y);
// }
// const y=5
// f()

// const bruce = {name:"Bruce"};
// const madeline = {name:"madeline"}

// function update(birthYear,occupation,...one){
//     this.birthYear=birthYear
//     this.occupation=occupation
//     this.one=one
// }
// update.call(bruce,234,"ZXC")
// const updateBruce=update.bind(bruce)
// console.log(bruce)
// updateBruce.call(null,"ads","XXX")
// console.log(bruce)
// const up=update.bind(bruce,"1234","Indigo","Kilo")
// up()
// console.log(bruce)

// const arr=[2,3,4,55,99,-7]
// const rez=Math.max.apply(null,arr)
// console.log(rez)
// function greet(){
//     return console.log(`ima- ${this.name}!!`)
// }

// const bruce = {name:"Bruce"};
// const madeline = {name:"madeline"}

// function update(birthYear,occupation,...one){
//     this.birthYear=birthYear
//     this.occupation=occupation
//     this.one=one
// }
// console.log(bruce)
// update.call(bruce,1949,"singer",1213,"asdsad","dfgeuwyfu,","asdwqd")
// console.log(bruce)

// function update1(birthYear1,...one){
//     this.birthYear1=birthYear1
//     // this.occupation1=occupation1
//     this.one=one
// }
// console.log(bruce)
// update1.call(bruce,[5,4,3,2,1],"Stroka",["ZAQ"],["XSW"])
// console.log(bruce)


// greet()
// greet.call(bruce)
// greet.call(madeline)

// const  o = {
//     name:"123456789",
//     greetBackwards: function(){
//         const getReverseName = ( )=> {
//             let nameBackwards=""
//             for(let i=this.name.length-1;i>=0;i--){
//                 nameBackwards+=this.name[i]
//             }
//             return nameBackwards
//         }
//         return console.log(`${getReverseName()} si eman ym, olleH`)
//     },
// }
// o.greetBackwards()

// name="qwerty"
// const o={
//     name:"Jule",
//     greetBackwards(){
//         function getReverseName(){
//             let nameBackwards=""
//             for(let i=this.name.length-1;i>=0;i--){
//                 nameBackwards+=this.name[i]
//             }
//             return nameBackwards
//         }
//         return `${getReverseName()} si eman ym, olleH`
//     }
// }
// const name="qwerty"
// const o={
//     name:"abcde",
//     greetBackwards(){
//         const self=this
//         function getReverseName(){
//             let nameBackwards=""
//             for(let i=self.name.length-1;i>=0;i--){
//                 nameBackwards+=self.name[i]
//             }
//             return nameBackwards
//         }
//         return `${getReverseName()} si eman ym, olleH`
//     }
// }

// console.log(o.greetBackwards());

// const o={
//     name:"Wallace",
//     speak(){
//         return console.log(`${this.name}!!! ASDFG`)
//     }
// }
// console.log(o.name)
// o.speak()

// const speak=o.speak
// speak === o.speak
// speak()

// const o={
//     name:"Wallace",
//     bark:function(){
//         return console.log("Woof!!!")
//     }
// }
// console.log(o.name)
// o.bark()

// const oo={
//     name:"Wallace11",
//     bark(){return "WOOOF!!!111"}
// }
// console.log(oo.name)
// console.log(oo.bark())

// function f(a,b="delta",c=100){
//     return console.log(`${a} ${b} ${c}`)
// }
// f(5)

// f()



// function addPrefix(prefix,...w){
//     const prefixedWords=[]
//     for(let i=0;i<w.length;i++){
//         prefixedWords[i]=w[i]
//     }
//     return prefixedWords
// }
// console.log(addPrefix("con","verse","vex"))
// function getSen1([sub,ver,obj]){
//     return `${sub} ${ver} ${obj}`;
// }
// const arr=["I","Love","JavaScript"];
// console.log(getSen1(arr));

// function getSentence({subject,verb,object}){
//     return `${subject} ${verb} ${object}`
// }

// const o={
//     subject:"I",
//     verb:" love",
//     object:"JavaScript"
// }

// console.log(getSentence(o))
// function ff(x){
//     return `Внутри f: x=${x}`;
// }
// console.log(ff())

// function f(o){
//     o.message="Изменено в f"
//     o.message= "Новый обьект!"
//     console.log(`Внутри o.message="${o.message}" (после присваивания)`)
// }
// let o={
//     message:"Начальное значение"
// }

// console.log(`Перед вызовом f: o.message="${o.message}"`)
// f(o)
// console.log(`После вызова f: o.message="${o.message}"`)

// function f(x){
//     console.log(`Внутри f: x=${x}`)
//     x=5
//     console.log(`Внутри f: x=${x} (После присваивания)`)
// }
// let x=3
// console.log(`Перед вызовом f: x=${x}`)
// f(x)
// console.log(`После вызовом f: x=${x}`)

// function map(f, a) {
//     var result = []; // Create a new Array
//     var i; // Declare variable
//     for (i = 0; i != a.length; i++)
//       result[i] = f(a[i]);
//         return result;
//   }
//   var f = function(x) {
//      return x * x;
//   }
//   var numbers = [0, 1, 2, 5, 10];
//   var cube = map(f,numbers);
//   console.log(cube);

// const arr=[1,2,3]
// arr[1]=sayHello
// arr[1]()

// function sayHello(){
//     return console.log("say")
// }
// // console.log(sayHello())
// const x=sayHello
// // console.log(x())
// const o={}
// o.z=x
// o.b=123
// console.log(o.z()[4])
// console.log(o.b)
// ty
// typeof (o.z()[4])
// const d=new Date();
// console.log(d);
// console.log(d.valueOf());

// const book = [
//     " Twinkle, twinkle, littlebat ! " ,
//     " How I wonder what you ' reat ! " ,
//     " Up above the world you fl y , " ,
//     " Like а tea tray in the sky . " ,
//     " Twinkl e , twinkle , little bat ! " ,
//     " How I wonder what you ' reat ! " ,
//     ] ;
// const it=book.values()
// const it1=book.values()
// console.log(it.next())
// console.log(it1.next())
// console.log(it1.next())
// console.log(it1.next())
// console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())

// const stuff=' hight :=9\n' +' mediu: 5\n'+' l ow : 2\n';
// const levels=stuff.match(/:\s*[0-9]/g);
// console.log(levels)

// // const input = "As I was going to Saint Ives"; 
// const input = 'HTML @a @1 @12 with a123a aa1234 1 2 3 <а href= "/one" >one link</a>,Back Back Back Baweck Back Bac1212k Bac12k and some JavaScript . ' +' < script src= " stuff . j s " > < / script> HTML' ;
// const re=/\w{3,}/ig
// // result=input.match(re)
// result=re.exec(/\w{3,}/ig)

// console.log(re.exec(/\w{1,}/ig))
// console.log(re.exec(/\w{2,}/ig))
// console.log(re.exec(/\w{3,}/ig))

// var myRe = /аб*/g;
// var str = 'аббвгдеабж';
// var myArray;
// while ((myArray = myRe.exec(str)) !== null) {
//   var msg = 'Найдено ' + myArray[0] + '. ';
//   msg += 'Следующее сопоставление начнётся с позиции ' + myRe.lastIndex;
//   console.log(msg);
// }

// const html = 'HTML @a @1 @12 with a123a aa1234 1 2 3 <а href= "/one" >one link</a>,Back Back Back Baweck Back Bac1212k Bac12k and some JavaScript . ' +' < script src= " stuff . j s " > < / script> HTML' ;
// // const bc=html.match(/\w[0-9]+/ig);
// // const bc=html.match(/\w[0-9][0-9][0-9]./);
// const re=/(@[0-9]{5})/i;
// console.log(re.exec(html));


// const html =
// ' <а class= "foo" href= "/foo" id= "foo">Foo< /a>\n <А href= " /foo "Class= "foo" >Foo</a> \ n  <а href= "/foo" >Foo</a>\n  <а onclick= " javascript : alert ( " foo!" ) " href= "/foo">Foo</a>';

// function sanitizeATag (aTag) {
//     // получить части дескриптора . . .
//     const parts = aTag.match (/< a\s+(.*?)>(.*?)<\/a>/i);
//     // parts [ 1 ] - а трибуты открывающего дескриптора <а>
//     // parts [2] - то, что между дескрипторами <а> и </а >
//     const attributes = parts[1]
//     // теперь разделяем на отдельные а трибуты
//     .split(/\s+/);
//     return '<а' + attributes
//     // мы хотим только атрибуты cla s s , id и href
//     .filter ( attr => /^(?:classl|id|href)[\s=]/i.test(attr))
//     // соединить через пробел
//     . join (' ')
//     // закрыть открытый дескриптор <а>
//     + '>'
//     // добавить содержимое
//     + parts [ 2 ]
//     // и завершающий дескриптор
//     + ' < / а> ' ;
// }

// const beer99 = " 9 9 b o t t l e s of beer on the wall " +
// " t a ke 1 down and p a s s i t around -- " +
// " 9 8 b o t t l e s o f beer on the wall . x" ;
// // const matches=beer99.match(/0|1|2|3|4|5|6|7|8|9/g)
// // const matches=beer99.match(/[0-9]/g)
// const matches=beer99.match(/[^\-0-9x-z.]/g)
// console.log(matches)

// const html='<br> [!CDATA[[<br>]]]'
// const matches=html.match(/<br>/ig)
// console.log(matches)


// const html = ' HTML with <а href= "/one" >one link</a>, and some JavaScript . ' +' < script src= " stuff . j s " > < / script> ' ;
// const matches=html.match(/<area|<a|<link|<script|source/ig)
// console.log(matches)

// const input ="As I was going to Saint Ives"
// const re=/\w{3,}/ig //трехбукыенные слова и более
// console.log(input.match(re))
// console.log(input.search(re))


// console.log(input.startsWith("As"))
// console.log(input.startsWith("as"))
// console.log(input.endsWith("going",14))

// const dates=[]
// const min=new Date(2000,0,1).valueOf();
// const delta =new Date(2020,0,1,4,7,9).valueOf()-min ;
// for (let i=0;i<10;i++){
//     dates.push(new Date(min + delta*Math.random()));
// }
// dates.sort((a,b)=>b-a);
// dates.forEach(element=>console.log(element))
// // dates.sort((a,b)=>a-b)

// const before={d: new Date()}
// // before.d instanceof Date
// const json= JSON.stringify(before)
// const after=JSON.parse(json)
// // after.d instanceof date
// console.log(typeof after.d)

// const amd=moment.tz([2016,3,27,9,19],'Amerika/Los_Angeles').toDate();
// console.log(amd)


// const SYM=Symbol();
// const o={a:1,b:2,c:3,[SYM]:4}
// // for (let prop in o){
// //     if(!o.hasOwnProperty(prop)) continue;
// //     console.log(`${prop}:${o[prop]}`)
// // }

// Object.keys(o).forEach(prop=>console.log(`${prop}:${o[prop]}`))

// const bruce={name:"Bruce"};
// const madeline={name:"Madeline"};
// function greet(){
//     return `Привет! Меня зовут ${this.name}!`;
// }
// console.log(greet());
// console.log(greet.call(bruce))
// console.log(greet.call(madeline))

// function update(birthYear,occupation){
//     this.birthYear=birthYear;
//     this.occupation=occupation;
// }

// update.call(bruce,"dfdfd","dfdfd","1111111");

// const o={
//     name:"Julie",
//     greetBackwards:function(){
//         const getReverseName=()=>{
//             let nameBackwards="";
//             for(let i=this.name.length-1;i>=0;i--){
//                 nameBackwards+=this.name[i];
//             }
//             return nameBackwards;
//         };
//         return `${getReverseName()} si eman`
//     }
// }
// console.log(o.greetBackwards());


//str 140

// const f1=function(){return "Hello!"};

// const f11=()=>"hello";

// const f2=function (name){return `Hello, ${name}!`}
// const f22=name=>`Hello, ${name}!`

// const f3=(a,b)=>a+b;

// const g=function f(stop){
//     if(stop){console.log("f Остановленно")};
//     f(true);
// };
// g(false);

//self

// const o={
//     name:"Nemo ZXC-VB-N",
//     greetBackwards: function(){
//         const self1=this;
//         function getReverseName(){
//             let nameBackwards="";
//             for(let i=self1.name.length-1;i>=0;i--){
//                 nameBackwards+=self1.name[i];
//             }
//             return nameBackwards;
//         }
//         return`${getReverseName()} --- reverse Name`;
//     },
// }
// console.log(o.greetBackwards());

// const o={
//     name:'Julie',
//     greetBackwards: function(){
//         function getReverseName(){
//             let nameBackwards="";
//             for (let i=this.name.length-1;i>=0;i--){
//                 nameBackwards+=this.name[i];
//             }
//             return nameBackwards;
//         }
//         return `${getReverseName()} si eman ym, olleH`
//     }
// };
// console.log(o.greetBackwards());

// console.log(getReverseName())

// const oo={
//     name:"Wallace",
//     foo(){console.log(this)},
//     speak(){return `Имя свойятва ${this.name}`}
// }
// console.log(oo.speak())
// console.log(oo.foo())

// a=`${o.name} --> ${o.speak()}`
// console.log(a)

// const o={
//     name:console.log("Wallace"),
//     // bark: function (){return console.log("Woof!")}
//     bark(){console.log("Opan-ki")}
// }
// o.name;
// o.bark();

// function f(a,b="def123",c=5){
//     console.log(`${a} - ${b} - ${c}`)
// }
// f();
// f(7,8,9);
// f("a","sd")

// function addPrefix(...words){
//     const prefixeWords=[];
//     for(let i=0;i<words.length;i++){
//         prefixeWords[i]=words[i];
//     }
//     return prefixeWords
// }
// console.log(addPrefix("asd","zxc","qwe","rty","fgh"))

// function addPrefix(prefix,...words){
//     const prefixedWords=[];
//     for (let i=0;i<words.length;i++){
//         prefixedWords[i]=prefix+words[i];
//     }
//     return prefixedWords;
// }
// addPrefix("con","verse","vex")

// function getSentence([subject,verb,object]){
//     return `${subject} - ${verb} - ${object}`
// }
// const arr=["I","love","JavaScript"];
// console.log(getSentence(arr))

// function getSentence({subject,verb,object}){
//     return`${subject} ${verb} ${object}`;
// }
// const o={
//     subject:"I ",
//     verb:"Love ",
//     object:"JavaScript"
// }
// console.log(getSentence(o));

// function f(x){
//     return `Внутри f: x=${x}`;
// }
// console.log(f());


// function f(o){
//     o.message="Изменено в f";
//     o={
//         message:"НОВЫЙ ОБЬЕКТ"
//     };
//     console.log(`Внутри f: o.message = ${o.message} (после присваивания)`);
// }
// let o={
//     message:"НАЧАЛЬНОЕ ЗНАЧЕНИЕ"
// };
// console.log(`ПЕРЕД вызовом f = "${o.message}"`);
// f(o);
// console.log(`ПОСЛЕ вызова f = "${o.message}"`);

// function f(o){
//     o.message=`Изменено в f(предыдущее значение: ${o.message})`;
// }
// let o={
//     message:"Начальное значение"
// };
// console.log(`Перед вызовом f: o.message = "${o.message}"`)
// f(o);
// console.log(`После ВЫЗОВА f: o.message = "${o.message}"`)

// function f(x){
//     console.log(`Внутри f: x = ${x}`);
//     x=5;
//     console.log(`Внутри f:x = ${x} (после присваивания)`)
// }
// let x=3;
// console.log(`Перед вызовом f: x = ${x}`);
// f(x);
// console.log(`Перед вызовом f: x = ${x}`);

// function avg(a,b){
//     return console.log((a+b)/2);
// }
// avg("1",2);

// function sayHello(){
//     console.log("Ops!!!")
// }

// const arr=[1,2,3];
// arr[1]=sayHello;
// arr[1]();

// o=sayHello;
// o();

// const f1={};
// f1.f=sayHello();


// typeof o;

// sayHello();
// console.log(sayHello);
// console.log(typeof sayHello);

// const x=3;
// function f(){
//     console.log(x);
//     console.log(y);
// }
// // f();
// const y="y";
// f();


// function f(o){
//     o.message="Изменнено в f";
//     // console.log(o);
//     o={message:"Новый обьект"};
//     // console.log(o)
//     console.log(`Внутри  f: o.message=${o.message} (после присваивания)` );
// }
// let o={
//     message: "Начальное значение"
// };

// console.log (`Перед вызовом f: o.message="${o.message}"`);
// f(o);
// console.log(`После вызова f: o.message="${o.message}"`);


// function f(x){
//     console.log(`Внутри f: x=${x}`);
//     x=5;
//     console.log(`Внутри f: x=${x} (после присваивания)`)
// }


// let a=5,b=10;
// [a,b]=[b,a]
// console.log(a)
// console.log(b)

// const arr=[1,2,3,4,5];
// let [x,y,...rest]=arr;
// console.log(x,y,rest)

// const obj={b:2,c:3,d:4}
// let a,b,c;
// ({a,b,c}=obj);
// console.log(a)
// console.log(b)
// console.log(c)

// const obj={b:2,c:3,d:4}
// const {b,c,d}=obj;
// console.log(obj)
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// let v,v0;
// const nums =[3,5,15,7,5];
// let n,i=0;
// while((n=nums[i])<10,i++ < nums.length){
//     console.log(`Число меньше 10: ${n}.`);
// }
// console.log(`Найдено число больше 10:  ${n}.`)
// console.log(`${nums.length} всего чисел.`)

// console.log(typeof ['qq'])
// console.log(typeof null)
// console.log(typeof {})
// console.log(typeof x)


// and && // и
//есле первое значение равно false то будет false
// or ||  //или
// есле первое значение равно true то будет true

// false={
//     undefined,
//     null,
//     false;
//     0,
//     NaN,
//     ""//Пустая строка
// }

// console.log(3+5+"8");   //Всегда строка
// console.log("3"+5+8);   //Всегда строка

// let n=0;
// while(true){
//     n+=0.1;
//     if (Math.abs(n-0.3)<Number.EPSILON) break;
// }

// console.log(`Stopped at ${n}`);

// let x=3,y;
// x+=y=6*5/2;
// console.log(x);

// let x=2;
// const r1=x++ + x++; //2+3=5
// console.log (r1)

// const r2=(++x) + (++x); //3+4=7
// console.log (r2)

// const r3=x++ + ++x;//2+4=6
// console.log (r3)

// const r4=x++ + x++; //2+2=4
// console.log (r4)

// let y=10;
// const r5=y-- + y--;
// console.log (r5);

// const r6=--y + --y;
// console.log (r6);

// const r7=y-- + --y;
// console.log (r7);

// const r8=--y + y--;
// console.log (r8);

// function randFace(){};
// // function randFace1(){};
// // function randFace2(){};
// const hand=[11,22,33];
// for(let i=0;i<hand.length;i++){
//     // console.log('Roll ${i} : ${hand[i]}')
//     console.log(`Znachenie - ${i} : ${hand[i]}`);
// }

// function randFace(){};
// const hand=[randFace(),randFace(),randFace()];
// for(let face of hand){
//     console.log('You rolled...${face}!');
// }

// const player={name:"Thomas",rank:"Midshpman",age:"25"};
// for(let prop in player){
//     if(!player.hasOwnProperty(prop)) continue;
//     console.log(prop + ':' +player[prop]);
// }

// function rand(m,n){
//     return m+Math.floor((n-m+1)*Math.random())
// }
// // console.log(rand(1,50));

// function randFace(){
//     return["crown","anchor","heard","spade","club","diamond"][rand(0,5)]
// }
// const z=randFace();
// console.log(z)

// function rand(m,n){
//     return m+Math.floor((n-m+1)*Math.random())
// }
// console.log(rand(1,50));

// const n="123a"
// console.log(n);
// const nn=parseInt(n);
// console.log(nn);
// const nnn=Number(n);
// console.log(nnn);


// const hallowen=new Date(2002,3,20)
// console.log(hallowen)
// console.log(hallowen.valueOf())

// const now =new Date();
// console.log(now)
// const a5=[5,5,5,5,{name:"name",asd:"asd"}];

// let a4=[
//     {name:"name",z:"z"},
//     {name:"name",z:"zz"},
//     {name:"Jo",zh1:"h1"},
// //     {name:"Hi",zh2:"h2"},
// //     {name:"Fi",zh3:"h3"}
// // ];

// // const sam3={
// //     name:'Sam',
// //     classification:{
// //         kingdom:'Amalia',
// //         phylum:'Chortdata',
// //         class:'Mamalia',
// //         family:'Felidae',
// //         subfamily:'Felinae',
// //         genus:'Felis',
// //         species:'catus',
// //         speak:function(){return "Meow!"}
// //     },
// // };

// $(document).ready(function(){
//     'use strict';
//     // console.log('main.js loaded');
//     paper.install(window);
//     paper.setup(document.getElementById('mainCanvas'));
//     // TODO

//     var c=Shape.Circle(200,200,80);
//     c.fillColor='Black';
//     var text=new PointText(200,200);
//     text.justification='center';
//     text.fillColor='white';
//     text.fontSize=20;
//     text.content='Hello world!'

//     var tool=new Tool();
//     tool.onMouseDown=function(event){
//         // var c=Shape.Circle(event.point.x,event.point.y,30)
//         var c=Shape.Circle(event.point,30);
//         c.fillColor='red';
//     }

//     // var c;
//     // for(var x=25;x<400;x+=50){
//     //     for(var y=25;y<400;y+=50){
//     //         c=Shape.Circle(x,y,20);
//     //         c.fillColor='orange'
//     //         }
//     //     }

//     // var c=Shape.Circle(200,200,50);
//     // c.fillColor='orange'

//     paper.view.draw();
// });