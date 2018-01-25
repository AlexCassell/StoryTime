/*eslint no-unused-vars: "off"*/
/*eslint no-useless-concat: "off"*/
import { inputArray }  from '../Create';
import {furniture, onOverUnder, howManyTimes, huntingGoing, distance, nounsMaterials, timeOfDay, typesOfAnimalPlural, count, movementSpeed, onTime, foodTime, movementHow, toBreak, bodyPartPlural, movementPastTense, bodyPositionsVerbsPastTense, verbs, nouns, adjectives, conjunctions, interjections, other,  witness, travel, irregularVerbsEndingING, bodilyFunctionVerbsPastTense} from './storyArrays'

const wordArrays  = [furniture, onOverUnder, howManyTimes, huntingGoing, distance, nounsMaterials, timeOfDay, typesOfAnimalPlural, count, movementSpeed, onTime, foodTime, movementHow, toBreak, bodyPartPlural, movementPastTense, bodyPositionsVerbsPastTense, verbs, nouns, adjectives, conjunctions, interjections, other,  witness, travel, irregularVerbsEndingING, bodilyFunctionVerbsPastTense]

//bear story -- for proof of concept
const paragraphOne = "Buster Bear yawned as he lay on his comfortable bed of leaves and watched the first early morning sunbeams creeping through the Green Forest to chase out the Black Shadows. Once more he yawned, and slowly got to his feet and shook himself. Then he walked over to a big pine-tree, stood up on his hind legs, reached as high up on the trunk of the tree as he could, and scratched the bark with his great claws. After that he yawned until it seemed as if his jaws would crack, and then sat down to think what he wanted for breakfast."
const paragraphTwo = "While he sat there, trying to make up his mind what would taste best, he was listening to the sounds that told of the waking of all the little people who live in the Green Forest. He heard Sammy Jay way off in the distance screaming, 'Thief! Thief!' and grinned. 'I wonder,' thought Buster, 'if some one has stolen Sammy's breakfast, or if he has stolen the breakfast of some one else. Probably he is the thief himself.'"
const paragraphThree = "He heard Chatterer the Red Squirrel scolding as fast as he could make his tongue go and working himself into a terrible rage. 'Must be that Chatterer got out of bed the wrong way this morning,' thought he.";
const paragraphFour = "He heard Blacky the Crow cawing at the top of his lungs, and he knew by the sound that Blacky was getting into mischief of some kind. He heard the sweet voices of happy little singers, and they were good to hear. But most of all he listened to a merry, low, silvery laugh that never stopped but went on and on, until he just felt as if he must laugh too. It was the voice of the Laughing Brook. And as Buster listened it suddenly came to him just what he wanted for breakfast.";
const paragraphFive = "'I'm going fishing,' said he in his deep grumbly-rumbly voice to no one in particular. 'Yes, Sir, I'm going fishing. I want some fat trout for my breakfast.'";
const paragraphSix = "He shuffled along over to the Laughing Brook, and straight to a little pool of which he knew, and as he drew near he took the greatest care not to make the teeniest, weeniest bit of noise. Now it just happened that early as he was, some one was before Buster Bear.  When he came in sight of the little pool, who should he see but another fisherman there, who had already caught a fine fat trout. Who was it? Why, Little Joe Otter to be sure. He was just climbing up the bank with the fat trout in his mouth. Buster Bear's own mouth watered as he saw it. Little Joe sat down on the bank and prepared to enjoy his breakfast. He hadn't seen Buster Bear, and he didn't know that he or any one else was anywhere near.";
const paragraphSeven = "Buster Bear tiptoed up very softly until he was right behind Little Joe Otter. 'Woof, woof!' said he in his deepest, most grumbly-rumbly voice. 'That's a very fine looking trout. I wouldn't mind if I had it myself.'";
const paragraphEight = "Little Joe Otter gave a frightened squeal and without even turning to see who was speaking dropped his fish and dived headfirst into the Laughing Brook. Buster Bear sprang forward and with one of his big paws caught the fat trout just as it was slipping back into the water.";
const paragraphNine = "'Here's your trout, Mr. Otter,' said he, as Little Joe put his head out of water to see who had frightened him so. 'Come and get it.'";
const paragraphTen = "But Little Joe wouldn't. The fact is, he was afraid to. He snarled at Buster Bear and called him a thief and everything bad he could think of. Buster didn't seem to mind. He chuckled as if he thought it all a great joke and repeated his invitation to Little Joe to come and get his fish. But Little Joe just turned his back and went off down the Laughing Brook in a great rage.";
const paragraphEleven = "'It's too bad to waste such a fine fish,' said Buster thoughtfully. 'I wonder what I'd better do with it.' And while he was wondering, he ate it all up. Then he started down the Laughing Brook to try to catch some for himself.";

const paragraphs = [paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive, paragraphSix, paragraphSeven, paragraphEight, paragraphNine, paragraphTen, paragraphEleven];

const WordChanger = () => {
    let words = paragraphs[0].split(" ");
    let newString = "";
    for(let i = 0; i < words.length; i++){
        for(let x = 0; x < wordArrays[x].length; x++){
            for(let j = 0; j < wordArrays[x][j].length; j++){
                if(words[i] === wordArrays[x][j]){
                words[i] = wordArrays[x][Math.floor((Math.random() * wordArrays[x].length) + 0)];
                console.log(words[i]);
            }
        }
    }
    }
    console.log(wordArrays[0][0]);
    // for(let r = 0; r < words.length; r++){
    //     // console.log(words[r]);
    //     newString += " " + words[r];
    // }


return (true);
}

export default WordChanger;