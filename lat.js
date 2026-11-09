/*
  @title   anyways jam
  @by      char stiles
  @license CC BY-NC-SA (code)
*/


var cpm = 30;
let drums= stack(
  s("bd:1").beat("0,7?,10",16).duck("3:4:5"),
  s("sd:2").beat("4,12",16),
  s("hh:4!8")
)
stack(

drums,



  
 //   sound("anywayz").gain(1.0).clip(0.5).slow(4).slice(".5","[0.01 [0.2 0.1]]")  
 //  //.gain(0.57).clip(1.).slow(2)
 // .euclidRot(floor(sine.range(4,10)).slow(4),16,0)
  
 //  .lpf(mouseY.mul(2000))
 //  .pan(1)
 //   //.lpq(mouseY.mul(20))
 //  // .room(mouseX.sub(1)).cpm(60)
 // .delay(sine.range(0,0.75).slow(10)),



  s("bd!4")
  .bank("rolandmc303")
  .gain(0.95)
  .room(0.15).duckorbit(1)
,

  sound("~ hh ~ [hh hh] ~ hh ~ hh")
  .bank("alesissr16")
  .gain(0.63)
   .crush(2).jux(rev).orbit(1),
  
 sound("anywayz").slice(".5","[0.01 [0.2 0.1]]")   
  .gain(0.7).clip(1.).slow(2).euclidRot("11 [5 8]/4",16,0)
  .attack(0.01).lpf(slider(207,0,1000))
.gain(0.9).delay(0.25).struct("x*16").orbit(1)  ,

 note(`
[f1 ~ ~ f1 ~ ~ f1 ~ ~ f1 ~ ~ f1 ~ ~ f1]
[db1 ~ ~ db1 ~ ~ db1 ~ ~ eb1 ~ ~ eb1 ~ ~ eb1]
`).slow(2).gain(1.2).orbit(4),





note(`g2 [g1 e2]`).chord("<C Am F G>").voicing().sometimes(x=>x.add(12)).slow(2).sound("sawtooth").lpf(800).distort(0.2).crush(2.).euclidrot(5,16,2)
.orbit(4)  ,
  

//s("ftt:3").room(1.).slow(0.68).release(0.3),//112 14 7 

 //  s("ftt:2").room(1.).slow(28/14.).release(0.3).lpf(2000),//112 14 7 
 // //  //   ,
 
 //   s("ftt:3").room(1.).slow(28/7.).release(0.3).gain(2.0).lpf(2000),//112 14 7 // 
 
 //    s("ftt:4").room(1.).slow(28/7.).release(0.3).lpf(2000),//112 14 7 
 // // ,

 //  s("ahh").room(1.).slow(28 * 4.9).release(0.3).gain(1.95),//112 14 7 
  

  
//,
  
  
note(`
[<g2@0.0.5 5 g2@g2@0.5 g2@0.5> g3]
[~][~]
`)
  .slow(2)
  .sound("sawtooth")
  .gain(0.65)
  .clip(1)
  .euclidRot(5,16,2)
   //.postgain(sine.range(1,0).slow(24))
  
  // .mask("<0!8 1!500>")
  // .pan(0.65)  
  .attack(0.2)   // Slow attack
  .release(0.01) // Quick release
  .room(1.92),
  

note("<f1!8 c1!8>")
  .s("tri")
  .orbit(2)
  .color("mediumslateblue")
  // .pan(0.3)
  .gain(slider(0.609, 0, 3).mul(.99))
  ._pianoroll()





  









  
  
//   .sound("gm_synth_bass_2:0")
//   .lpf(800)
//   .pan(0.4)
//   .euclidRot(2,4,2)
  
//   .release(0.25)
//   .room(0.2)
// ,
  



  




).cpm(cpm)




