// @title aeiou @by char

const aeiou_kick1 = s("cs808:2").struct(
  "[~ x ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ x ~ ~]"
)
// 0 short low / 1 low long / 2 high pitched short / 3 long high pitched

const aeiou_bass = s(
  "cs808:[1 ~ ~ ~ ~ ~ ~ ~ ~ ~ 1 ~ ~ 3 ~ 2 1 ~ ~ ~ ~ ~ 1 ~ ~ ~ ~ ~ 1 ~ ~ ~]"
)
  .struct(
    "[x ~ ~ ~ ~ ~ ~ ~ ~ ~ x ~ ~ x ~ x x ~ ~ ~ ~ ~ x ~ ~ ~ ~ ~ x ~ ~ ~]"
  )
  .slow(4)
  .cut(1)

const aeiou_kick2 = s("rolandtr808_bd")
  .struct("[x ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ x ~ ~ ~]")
  .lpf(900)
  .gain(1.15)
  .shape(0.45)
  .cut(10)
  .duckorbit(2)
  .duckdepth(0.35)
  .duckattack(0.12)

const aeiou_kick = aeiou_bass

const aeiou_vox2 = note("[c2 <eb2 <g2 g1>>]*2")
  .s("saw")
  .shape(0.6)
  .vowel("< a e [i o u]>")
  .fxr(0.3)

const aeiou_bass808 = note(
  cat(
    "[c2 c2 c1 c1 c1 c1 c1 c1 c1 c1 c1 c1 c2 c2 c1 c1]",
    "[c1 c1 c1 c1 c1 c2 c1 c1 c1 c1 c1 c2 c1 c1 c1 c1]"
  )
)
  .s("supersaw")
  .attack(0.001)
  .decay(0.28)
  .sustain(0.55)
  .release(0.06)
  .lpf(perlin.range(140, 420).slow(1))
  .hpf(slider(860, 0, 1000))
  .lpq(5)
  .shape(0.72)
  .gain(0.945)
  .orbit(2)
  .stack(
    note(
      cat(
        "[c3 c3 c2 c2 c2 c2 c2 c2 c2 c2 c2 c2 c3 c3 c2 c2]",
        "[c2 c2 c2 c2 c2 c3 c2 c2 c2 c2 c2 c3 c2 c2 c2 c2]"
      )
    )
      .s("supersaw")
      .decay(0.18)
      .sustain(0.25)
      .lpf(700)
      .shape(0.55)
      .gain(0.67)
      .orbit(2)
      .postgain(slider(0, 0, 1))
  )

const aeiou_clap = stack(
  s("cp")
    .bank("RolandTR909")
    .struct("[~ ~ ~ ~ ~ ~ ~ ~ x ~ ~ ~ ~ ~ ~ ~]")
    .gain(0.25)
    .hpf(450)
    .room(0.935)
    .size(0.55)
    .shape(0.35),
  s("cp")
    .bank("RolandTR707")
    .struct("[~ ~ ~ ~ ~ ~ ~ ~ x ~ ~ ~ ~ ~ ~ ~]")
    .gain(0.25)
    .hpf(1300)
    .speed(1.03)
)
  .duckorbit("2:3")
  .duckdepth("0.85:0.3")
  .duckattack("0.32:0.28")

const aeiou_tick = s("hh*8")
  .bank("RolandTR808")
  .gain(0.32)
  .hpf(8000)
  .speed(1.3)
  .clip(0.2)

const aeiou_vox = aeiou_vox2

const aeiou_voxIntro = aeiou_vox
  .struct("[x x ~ ~ x x x ~ x ~ ~ ~ x ~ x ~]")
  .gain(0.5)
const aeiou_voxPredrop = aeiou_vox.struct("x*16").gain(0.65)
const aeiou_voxDrop = aeiou_vox.struct(
  cat(
    "[x ~ x x x x x x x x x x x ~ x x]",
    "[x x x ~ x ~ x x x x x ~ x x x x]"
  )
)
const aeiou_voxHook = aeiou_vox
  .struct("[x ~ x ~ x ~ x ~ x ~ x ~ x ~ x ~]")
  .gain("[.7 0 .55 0 .6 0 .55 0 1 0 .55 0 .6 0 .5 0]")
const aeiou_voxBreak = aeiou_vox
  .struct("[x ~ ~ x ~ ~ x ~]*2")
  .gain(0.55)
const aeiou_voxDip = aeiou_vox.struct("x*16").gain(0.6)

const aeiou_motif = note("<ab4 f5>")
  .trans(-12)
  .s("nn")
  .struct("[x ~ x ~]*4")
  .cutoff(1800)
  .decay(0.15)
  .sustain(0.05)
  .gain(1.922)
  .delay(0.25)
  .delaytime(0.1875)
  .room(0.25)
  .orbit(3)

const aeiou_lead = note(
  "<c5 eb5 f5 g5> <eb5 f5 g5 bb5> <c5 eb5 f5 ab5> <bb4 c5 eb5 f5>"
)
  .trans(-12)
  .s("nn")
  .struct("[x ~ ~ x ~ ~ x ~ ~ x ~ ~ x ~ ~ ~]")
  .cutoff(perlin.range(900, 2600).slow(4))
  .decay(0.18)
  .sustain(0.08)
  .gain(1.9824)
  .delay(0.28)
  .delaytime(0.1875)
  .delayfeedback(0.35)
  .room(0.3)
  .orbit(3)

const aeiou_pad = note("<ab2,c3,eb3> <f2,ab2,c3>")
  .s("nn")
  .slow("<1 2 1 4 2>")
  .attack(0.45)
  .release(0.5)
  .lpf(1100)
  .gain(0.9)
  .room(0.55)
  .orbit(3)

const aeiou_pluck = note("[ab4 ~ c5 ~ eb5 ~ f5 ~]")
  .s("clash")
  .trans(-12)
  .gain(0.2)
  .cutoff(3200)
  .delay(0.2)
  .room(0.2)
  .orbit(3)

const aeiou_subRise = note(
  "[~ ~ ~ ~ ~ ~ ~ ~ c1 c1 c1 c1 c2 c2 c1 c1]"
)
  .s("sawtooth")
  .decay(0.2)
  .sustain(0.3)
  .lpf(180)
  .shape(0.6)
  .gain(0.85)
  .orbit(2)

const aeiou_subDip = note("c1")
  .s("sawtooth")
  .decay(0.9)
  .lpf(100)
  .shape(0.55)
  .gain(0.7)
  .orbit(2)

const aeiou_subBreak = note("[c1 ~ ~ ~]*4")
  .s("sawtooth")
  .decay(0.55)
  .sustain(0)
  .lpf(160)
  .shape(0.5)
  .gain(0.65)
  .orbit(2)

const aeiou_octEnd = note("[c1,c2]*8")
  .s("sawtooth")
  .decay(0.22)
  .lpf(320)
  .shape(0.65)
  .gain(0.4)
  .orbit(2)

trackpick(
  [
    [aeiou_kick, aeiou_kick.gain(0.6)],
    [aeiou_clap],
    [aeiou_tick],
    [
      aeiou_voxIntro,
      aeiou_voxPredrop,
      aeiou_voxDrop,
      aeiou_voxHook,
      aeiou_voxBreak,
      aeiou_voxDip,
    ],
    [aeiou_bass808],
    [aeiou_motif, aeiou_motif.gain(0.18), aeiou_motif.gain(0.9)],
    [
      aeiou_lead,
      aeiou_lead.gain(0.2),
      aeiou_lead.gain(0.83),
    ],
    [
      aeiou_pad,
      aeiou_pad.gain(0.9),
      aeiou_pad.gain(0.912),
      aeiou_pad.gain(0.2),
      aeiou_pad.gain(0.914),
    ],
    [
      aeiou_pluck.gain(0.12),
      aeiou_pluck,
      aeiou_pluck.gain(0.16),
      aeiou_pluck.gain(0.82),
    ],
    [aeiou_subRise, aeiou_subDip, aeiou_subBreak, aeiou_octEnd],
  ],
  // intro
  16, "0-0-0-1-0-1-0-1-1-0",
  // rise
  7, "0-0-0-2-0-2-0-0-0-1",
  // dropA
  1, "1-1-1-3-0-0-2-2-0-0",
  // dip
  1, "0-1-0-6-0-0-0-0-0-2",
  // dropB
  7, "1-1-1-4-0-0-1-3-2-0",
  // breakdown
  9, "2-1-0-5-1-3-0-4-3-3",
  // rise
  1, "0-0-0-2-0-2-0-0-0-1",
  // dropC
  10, "1-1-1-4-1-0-3-5-4-4"
)

