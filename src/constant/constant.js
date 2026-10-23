export const HIGHEST_SCORE = "HIGHEST_SCORE";
export const HIGHEST_REWARD = "HIGHEST_REWARD";
export const COLORS_WORM = [
  "#55101e",
  "#9c6b29",
  "#90eb7ec2",
  "#193a4b",
  "#6f5157",
  "#67560e",
];
//Note: This is not ony for Id, we can use wherever requires
export const insectID = {
  worm_01: "worm-01-id01-reward-5",
  worm_02: "worm-02-id02-reward-10",
  worm_03: "worm-03-id03-reward-5",
  worm_04: "worm-04-id04-reward-5",
  worm_05: "worm-05-id05-reward-15",
  mouse_01: "mouse-01-id06-reward-15",
  mouse_02: "mouse-02-id07-reward-15",
  spider_01: "spider-01-id08-reward-10",
  spider_02: "spider-02-id09-reward-10",
  beetle_01: "beetle-01-id10-reward-10",
  beetle_02: "beetle-02-id11-reward-10",
  //   hard_stone_01: "hard-stone-01-id10-reduce-0.2",
};

export const insectClass = {
  wireworm: "wireworm",
  mouse: "insect-walk",
  moveY: "insect-walk-y",
};
//all insect char's class name add here
export const ALL_GAME_CHARACTERS = [
  insectClass.wireworm,
  insectClass.mouse,
  insectClass.moveY,
];
