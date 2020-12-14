const book = [
    " Twinkle, twinkle, littlebat ! " ,
    " How I wonder what you ' reat ! " ,
    " Up above the world you fl y , " ,
    " Like а tea tray in the sky . " ,
    " Twinkl e , twinkle , little bat ! " ,
    " How I wonder what you ' reat ! " ,
    ] ;
const it=book.values()
const it1=book.values()
console.log(it.next())
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())
console.log(it.next())
// console.log(it.next())
// console.log(it.next())

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
//     {name:"Hi",zh2:"h2"},
//     {name:"Fi",zh3:"h3"}
// ];

// const sam3={
//     name:'Sam',
//     classification:{
//         kingdom:'Amalia',
//         phylum:'Chortdata',
//         class:'Mamalia',
//         family:'Felidae',
//         subfamily:'Felinae',
//         genus:'Felis',
//         species:'catus',
//         speak:function(){return "Meow!"}
//     },
// };

$(document).ready(function(){
    'use strict';
    // console.log('main.js loaded');
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    // TODO

    var c=Shape.Circle(200,200,80);
    c.fillColor='Black';
    var text=new PointText(200,200);
    text.justification='center';
    text.fillColor='white';
    text.fontSize=20;
    text.content='Hello world!'

    var tool=new Tool();
    tool.onMouseDown=function(event){
        // var c=Shape.Circle(event.point.x,event.point.y,30)
        var c=Shape.Circle(event.point,30);
        c.fillColor='red';
    }

    // var c;
    // for(var x=25;x<400;x+=50){
    //     for(var y=25;y<400;y+=50){
    //         c=Shape.Circle(x,y,20);
    //         c.fillColor='orange'
    //         }
    //     }

    // var c=Shape.Circle(200,200,50);
    // c.fillColor='orange'

    paper.view.draw();
});