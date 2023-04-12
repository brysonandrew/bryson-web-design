export const VERSE = [
  ...[...Array(4)].map((_) => 11), //B
  ...[...Array(4)].map((_) => 10), //A#
  ...[...Array(8)].map((_) => 15), // E
];
// intro = 4;
// intro chorus = 4
// verse 1 = 8
// chorus = 4
// verse 2 = 8
// chorus = 4
// bridge = 8
// chorus = 4
// intro = 4;
// total = 48

export const REPEAT_COUNT = 48
// Chorus  a a a a a feel like super man, fighin good and evil with my super friends

// Verse   I feel like Bruce Banner in control
//         Peace in my heart and steroids in my soul
//         I feel like Jake Gyllenhaal on a crawl
//         Drinking with my sticky hands so I never fall
//         Who the fuck is you, lookin' like you taste the pistol
//         Stay the fuck out my way fore' this day gonna miss you
//         I just say that shit for my friends
//         For me you just the breeze, i love you momma

// Chorus  a a a a a feel like super man, fighin good and evil with my super friends

// Verse   I feel like Bruce Jenner on the road
//         Peace in my heart and titty skittles in my soul
//         I feel like Tintin Thunberg on a crawl
//         Drinking with my FAS lookin' zombie more and more
//         Who the fuck is you, lookin' like you always normal
//         Stay the fuck out my way fore' this day gonna miss you
//         I just say that shit for myself
//         It's all i care about, it's all my kahrma

// ALT Bridge just call me nobody jjjjj just call me nobody
// Fighting for those dreams, hurting for those dreams, killing for those dreams, until those dreams are mine

export const BASS_STEPS = [...VERSE];

export const CYMBAL_STEPS = [
  ...[...Array(64)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
];

export const SNARE_STEPS = [
  ...[...Array(64)].map((v, i) =>
    (i + 16) % 64 === 0 ? 1 : 0,
  ),
];

export const KICK_STEPS = [
  ...[...Array(64)].map((v, i) => (i % 32 === 0 ? 1 : 0)),
];

export const STEPS_COUNT = BASS_STEPS.length;
export const INTERVAL_DURATION = BASS_STEPS.length * 1000; // * VERSES.length; // * BARS.length;
export const BEAT_DURATION = 1000; // 1000 = 1sec
export const STEP_DURATION = 1000 * BASS_STEPS.length;
