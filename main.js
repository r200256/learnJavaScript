function addPrefix(prefix,...words){
    const prefixedWords=[];
    for (let i=0;i<words.length;i++){
        prefixedWords[i]=prefix+words[i];
    }
    return prefixedWords;
}
addPrefix("con","verse","vex")

// function getSentence({subject,verb,object}){
//     return`${subject} ${verb} ${object}`;
// }
// const o={
//     subject:"I ",
//     verb:"Love ",
//     object:"JavaScript"
// }
// getSentence(o);

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