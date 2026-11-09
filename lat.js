// @title LAT
// @by v10101a and char


samples({
  
  lat2:    'lat/05.Elígeme.wav',

}, 'github:charstiles/samples/main/');


const loopAx = register('loopAx', 
  (l, pat) => pat.loopAt(l).chop(l*8).legato(1).mul(speed(0.99))
);



_$: s("lat2:<0 1 0 2 0>").slice(16,"<5 0> <6 1> <[2 2 2] 5> <3 6> 4 5 6 8").slow(4)
  .sometimes(x=> x.jux(rev)).clip(1)
  // .delay(.5)
  .room(.5).sz(10).o(2)
  .postgain(2)
//.loopAx(2)

$: s("lat:<0>").slice(16,"<[5 6] [0 1] [10 12] [8 9]>")
  .clip(1).room(.5).sz(10).o(2).lastOf(8, x => x.fast(2))



$: s("sbd*4")
  .lastOf(8, x => x.ply("2 4")).sometimes(x => x.jux(rev))
$: s("bd")//.room(1).roomsize(1)
  //.struct("[x - x - x@3 x@3 x@2]")//.diode(".8:2")
   .struct("[x ~ ~ x ~ ~ x ~]*2").lastOf(8, x => x.fast(2))
  //.beat("0,7?,10",16)
  .gain(1.0)
  .shape(0.4)
  .cut(1)
  .postgain(1)
  // .duckorbit("2:3")
  .duckdepth("0.75:0.3")
  .duckattack("0.2:0.3")

$: s("sd:3").beat("4,12",16).postgain(.7).dec(.1)

$: s("white!8").gain(.2).almostNever(ply("2 | 4")).delay(.4).dec(.1)


$: sound("~ hh ~ [hh hh] ~ oh ~ hh").sound("slapstick").sometimes(x=>x.jux(rev)).ribbon(2,6).gain(slider(6.2775,0.,7.5)).slow(2)
$: s("perc*4").bank("t3").lpf(100).euclidrot("<[5 8] 11>/4",16,2).slow(2).orbit(1).gain(4.)
