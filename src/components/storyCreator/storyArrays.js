const verbs = ["chase", "played", "ran", "wrestled", "sat", "added", "scratched", "allowed", "baked", "banged", "called", "chased", "damaged", "droped", "ended", "escaped", "fastened", "fixed", "gathered", "grabed", "hung", "hugged", "imagined", "itched", "jogged", "jumped", "kicked", "knitted", "landed", "locked", "marched", "mixed", "named", "noticed", "obeyed", "opened", "passed", "promised", "questioned", "reached", "rinsed", "scattered", "stayed", "talked", "turned", "untied", "used", "vanished", "visited", "walked", "worked", "yelled", "zipped", "zoomed"];
const irregularVerbsEndingING = ["cawing", "scolding", "screaming", "creeping", "abiding", "alighting", "arising", "awaking", "bearing", "beating", "becoming", "befalling", "beginning", "beholding", "bending", "bereaving", "beseeching", "betting", "bidding", "binding", "biting", 'bleeding', "blowing", "breaking", "breeding", "bringing", "broadcasting", "building", "burning", 'bursting', "busting",'learning','thinking','running','jogging','sitting','walking','eating','gardening','building','flying','jumping','examining','stacking','gaming','spelling','collecting','coloring','playing', "listening" ];
const bodilyFunctionVerbsPastTense = ["yawned", "layed", "watched", "listened", "shrugged", "coughed", "pointed", "top-toed"];
const bodyPositionsVerbsPastTense = ["lay", "sat", "squatted", "knelt"]
const movementPastTense = ["ran", "walked", "swam", "jumped", "hopped", "skipped", "climbed", "sailed", "danced", "flew", "rolled"];
const onOverUnder = ["on", "over", "under", "beyond", "within", "below", "on top of"];
const bodyPartPlural = ["lungs", "claws", "hands", "nails", "eyebrows", "feet", "toes", "fingers", "wings", "ears", "jaws", "teeth"];

const toBreak = ["breach", "crack", "chink", "chip", "fissure", "fracture", "rift", "split", "cleft", "cut"];

const foodTime = ["breakfast", "lunch", "brunch", "dinner", "a snack"];

const pace = ["fast", "slow", "quick", "nimble"];

const movementHow = ["through", "along", "past", "inside", "beside", "outside of", "around"];
const movementSpeed = ["slowly", "quickly", "fastly", "eventually"];
const typesOfAnimalPlural = ["fish", "birds", "dogs", "cats"];

const huntingGoing = ["fishing", "hunting", "crabbing"];
const distance = ["high", "low", "far", "near"];

const howManyTimes = ["once", "twice", "thrice"]

const nounsMaterials = ["leaves", "bones", "plastic", "feathers", "skulls", "rocks", "wood", "glass", "sand", "teeth"];

const adjectives = ["silvery", "sweet", "big", "comfortable", "slimy", "uncomfortable", "hard", "soft", "great", "weak", "broken", "strong", "alive", "angry", "backward", "better", "best", "beautiful", "breakable", "bright", "broken", "bumpy", "careful", "clear", "closed", "cloudy", "clumsy", "pink", "purple", "gray","brown", "white", "comfortable", "dangerous", "delicious", "deep", "difficult", "dry", "early", "easy", "empty", "excellent", "exciting", "famous", "far", "first", "few", "flat", "free", "freezing", "friendly", "full", "half", "hard", "healthy", "helpful", "horrible", "icy", "important", "impossible", "itchy", "juicy", "large", "last", "late", "lazy", "light", "loose", "more", "near", "nervous", "noisy", "nosy", "past", "perfect", "plastic", "poor", "powerful", "quick", "rainy","ready", "rotten", "rough", "round", "salty", "same", "second", "secret", "shallow", "shy", "skinny","sour", "spicy", "spotted", "sticky", "straight", "strange", "striped", "sweet", "tame", "thankful", "tight", "tiny", "tough", "underlined", "used", "warm", "weak", "wide", 'wild', "wise", "whole", "wild", "wonderful", "wrong", "young"];

const count = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "nineth", "tenth"];

const onTime = ["early", "late"];

const timeOfDay = ["morning", "afternoon", "noon", "evening", "dusk", "dawn", "night", "late night", "early morning"];

const conjunctions = ["after", "although", "as", "as if", "as long as", "as much as", "as soon as", "as though", "because", "before", "by the time", "even if", "even though", "if", "in order that", "in case", "lest", "once", "only if", "provided that", "since", "so that", "than", "that", "though", "till", "unless", 'until', "when", "whenever", "where", "wherever", "while"];

const interjections = ["aha", "ahem", "ahh", "ahoy", "alas", "arg", "aw", "bam", "bingo", "blah", "boo", "bravo", "brrr", "cheers", "congratulations", "dang", "drat", "darn", "duh", "eek","eh", "encore", "eureka", "fiddlesticks", "gadzooks", "gee", "gee whiz", "golly", "goodbye", "goodness", "good grief", "gosh", "ha-ha", "hallelujah", "hello", "hey", "hmm", "holy buckets", "holy cow", "holy smokes", "hot dog", "humph", "hurray","oh", "oh dear", "oh my", "oh well", "oops", "ouch","ow", "phew", "phooey", "pooh", "pow", "rats", "shh", "shoo", "thanks", "there", "tut-tut", "uh-huh", "uh-oh", "ugh", "wahoo", "well", "whoa", "whoops", "wow"];

const other = ["where", "how", "why"];//finish

const witness = ["saw", "witnessed", "viewed", "heard", "overheard", "smelled", "felt", "sensed", "watched", "listened"];

const travel = ["headed"];//finish

const furniture = ["bed", "cart", "floor", "carpet", "rug", "desk", "couch", "chair", "cot"];

const nouns = ["time", "year", "people", "way", "day", "man", "thing", "woman", "life", "child", "world", "school", "state", "family", "student", "group", "country", "problem", "hand", "part", "place", "case", "week", "company", "system", "program", "question", "work", "government", "number", "night", "point", "home", "water", "room", "mother", "area", "money", "story", "fact", "month", "lot", "right", "study", "book", "eye", "job", "word", "business", "issue", "side", "kind", "head", 'house', "service", "friend", "father", "power", "hour", "game", "line", "end", 'member', "law", "car", "city", "community", "name", 'president', "team", "minute", "idea", "kid", "body", "information", "back", "parent", 'face', "others", "level", "office", "door", 'health', "person", 'art', "war", "history", "party", 'result', "change", "morning", "reason", "research", "girl", "guy", "moment", "air", "teacher", "force", "education"];


export {verbs};
export {adjectives};
export {conjunctions};
export {interjections};
export {nouns};
export {other};
export {witness};
export {travel};
export {irregularVerbsEndingING};
export {bodilyFunctionVerbsPastTense};
export {bodyPositionsVerbsPastTense};
export {movementPastTense};
export {bodyPartPlural};
export {toBreak};
export {movementHow};
export {foodTime};
export {onTime};
export {movementSpeed};
export {count};
export {typesOfAnimalPlural};
export {timeOfDay};
export {nounsMaterials};
export {distance};
export {huntingGoing};
export {howManyTimes};
export {furniture};
export {onOverUnder};
export {pace};