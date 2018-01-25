/*eslint no-unused-vars: "off"*/
/*eslint no-useless-concat: "off"*/
import React, { Component } from 'react'; 
import { inputArray }  from '../Create';
import {pace, furniture, onOverUnder, howManyTimes, huntingGoing, distance, nounsMaterials, timeOfDay, typesOfAnimalPlural, count, movementSpeed, onTime, foodTime, movementHow, toBreak, bodyPartPlural, movementPastTense, bodyPositionsVerbsPastTense, verbs, nouns, adjectives, conjuctions, interjections, other,  witness, travel, irregularVerbsEndingING, bodilyFunctionVerbsPastTense} from './storyArrays'

let story = ["Click Refactor and Get Started With Your Story!"];


const StoryCreator = () => {
    let paragraphOne = inputArray[1][0] + " the " + inputArray[4][0] + " " + bodilyFunctionVerbsPastTense[Math.floor((Math.random() * bodilyFunctionVerbsPastTense.length) + 0)]  + " as they " + bodyPositionsVerbsPastTense[Math.floor((Math.random() * bodyPositionsVerbsPastTense.length) + 0)]  + " on their " + adjectives[Math.floor((Math.random() * adjectives.length) + 0)] + " bed of "+ nounsMaterials[Math.floor((Math.random() * nounsMaterials.length) + 0)] + " and "+ witness[Math.floor((Math.random() * witness.length) + 0)] + " the " + count[Math.floor((Math.random() * count.length) + 0)] + " " + onTime[Math.floor((Math.random() * onTime.length) + 0)] + " " + timeOfDay[Math.floor((Math.random() * timeOfDay.length) + 0)] + " sunbeams " + " " + irregularVerbsEndingING[Math.floor((Math.random() * irregularVerbsEndingING.length) + 0)] + " " + movementHow[Math.floor((Math.random() * movementHow.length) + 0)] + " the Green Forest to chase out the Black Shadows. " + howManyTimes[Math.floor((Math.random() * howManyTimes.length) + 0)] + " more he " + bodilyFunctionVerbsPastTense[Math.floor((Math.random() * bodilyFunctionVerbsPastTense.length) + 0)] + ", and " + movementSpeed[Math.floor((Math.random() * movementSpeed.length) + 0)] +" got to his feet and shook himself. Then he " + movementPastTense[Math.floor((Math.random() * movementPastTense.length) + 0)] +" over to a big pine-tree, stood up on his hind legs, reached as "+ distance[Math.floor((Math.random() * distance.length) + 0)] +" up on the trunk of the tree as he could, and scratched the bark with his " + adjectives[Math.floor((Math.random() * adjectives.length) + 0)] + " " + bodyPartPlural[Math.floor((Math.random() * bodyPartPlural.length) + 0)] +". After that he " + bodilyFunctionVerbsPastTense[Math.floor((Math.random() * bodilyFunctionVerbsPastTense.length) + 0)] +" until it seemed as if his "+ bodyPartPlural[Math.floor((Math.random() * bodyPartPlural.length) + 0)] +" would "+ toBreak[Math.floor((Math.random() * toBreak.length) + 0)] + ", and then sat down to think what he wanted for " + foodTime[Math.floor((Math.random() * foodTime.length) + 0)] + "."
    let paragraphTwo = "While he "+ bodyPositionsVerbsPastTense[Math.floor((Math.random() * bodyPositionsVerbsPastTense.length) + 0)] +" there, trying to make up his mind what would taste best, he was " + irregularVerbsEndingING[Math.floor((Math.random() * irregularVerbsEndingING.length) + 0)] +" to the sounds that told of the waking of all the little people who live in the Green Forest. He heard " + inputArray[1][1] + " the " + inputArray[4][1] + " " + " way off in the distance " + irregularVerbsEndingING[Math.floor((Math.random() * irregularVerbsEndingING.length) + 0)] + ", 'Thief! Thief!' and grinned. 'I wonder,' thought " + inputArray[1][0] + ", 'if some one has stolen " + inputArray[1][1] + "'s " + foodTime[Math.floor((Math.random() * foodTime.length) + 0)] + ", or if she has stolen food from some one else. Probably she is the thief herself.'"
    let paragraphThree = "He heard " + inputArray[1][2] + " the " + inputArray[4][2] + " " + irregularVerbsEndingING[Math.floor((Math.random() * irregularVerbsEndingING.length) + 0)] +" as " + pace[Math.floor((Math.random() * pace.length) + 0)] +" as he could make his tongue go and working himself into a " + adjectives[Math.floor((Math.random() * adjectives.length) + 0)] + " rage. 'Must be that " + inputArray[1][2] +" got out of bed the wrong way this morning,' thought he.";
    let paragraphFour = "He heard " + inputArray[1][3] + " the " + inputArray[4][3] + " " + irregularVerbsEndingING[Math.floor((Math.random() * irregularVerbsEndingING.length) + 0)] + " at the top of his " + bodyPartPlural[Math.floor((Math.random() * bodyPartPlural.length) + 0)] + ", and he knew by the sound that " + inputArray[1][3] +" was getting into mischief of some kind. He heard the " + adjectives[Math.floor((Math.random() * adjectives.length) + 0)] +" voices of happy little singers, and they were good to hear. But most of all he listened to a merry, low, " + adjectives[Math.floor((Math.random() * adjectives.length) + 0)] + " laugh that never stopped but went on and on, until he just felt as if he must laugh too. It was the voice of the Laughing Brook. And as " + inputArray[1][0] + " " + witness[Math.floor((Math.random() * witness.length) + 0)] + " it suddenly came to him just what he wanted for " + foodTime[Math.floor((Math.random() * foodTime.length) + 0)] +".";
    let paragraphFive = "'I'm going fishing,' said he in his deep grumbly-rumbly voice to no one in particular. 'Yes, Sir, I'm going fishing. I want some fat trout for my breakfast.'";
    let paragraphSix = "He shuffled along over to the Laughing Brook, and straight to a little pool of which he knew, and as he drew near he took the greatest care not to make the teeniest, weeniest bit of noise. Now it just happened that early as he was, some one was before " + inputArray[1][0] + ".  When he came in sight of the little pool, who should he see but another fisherman there, who had already caught a fine fat trout. Who was it? Why, " + inputArray[1][4] + " the " + inputArray[4][4] + " to be sure. He was just climbing up the bank with the fat trout in his mouth. " + inputArray[1][0] + "'s own mouth watered as he saw it. " + inputArray[1][4] + " sat down on the bank and prepared to enjoy her " + foodTime[Math.floor((Math.random() * foodTime.length) + 0)] + ". She hadn't seen " + inputArray[1][0] + ", and she didn't know that he or any one else was anywhere near.";
    let paragraphSeven = inputArray[1][0] + "tiptoed up very softly until he was right behind Little Joe Otter. 'Woof, woof!' said he in his deepest, most grumbly-rumbly voice. 'That's a very fine looking trout. I wouldn't mind if I had it myself.'";
    let paragraphEight = inputArray[1][4] + " the " + inputArray[4][4] + " gave a frightened squeal and without even turning to see who was speaking dropped her fish and dived headfirst into the Laughing Brook. " + inputArray[1][0] + " the " + inputArray[4][0] + " sprang forward and with one of his big paws caught the fat trout just as it was slipping back into the water.";
    let paragraphNine = "'Here's your trout, " + inputArray[1][4] + " the " + inputArray[4][4] + ",' said he, as " + inputArray[1][4]  + " put his head out of water to see who had frightened him so. 'Come and get it.'";
    let paragraphTen = "But " + inputArray[1][4] + " the " + inputArray[4][4] + " wouldn't. The fact is, she was afraid to. She snarled at " + inputArray[1][4] + " the " + inputArray[4][0] + " and called him a thief and everything bad she could think of. " + inputArray[1][0] +  " didn't seem to mind. He chuckled as if he thought it all a great joke and repeated his invitation to Little Joe to come and get his fish. But Little Joe just turned his back and went off down the Laughing Brook in a great rage.";
    let paragraphEleven = "'It's too bad to waste such a fine fish,' said " + inputArray[1][0] + " the " + inputArray[4][0] + " thoughtfully. 'I wonder what I'd better do with it.' And while he was wondering, he ate it all up. Then he started down the Laughing Brook to try to catch some for himself.";

    story = [paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive, paragraphSix, paragraphSeven, paragraphEight, paragraphNine, paragraphTen, paragraphEleven];

return (
        <div>
        {story[0]}<br /><br />
        {story[1]}<br /><br />
        {story[2]}<br /><br />
        {story[3]}<br /><br />
        {story[4]}<br /><br />
        {story[5]}<br /><br />
        {story[6]}<br /><br />
        {story[7]}<br /><br />
        {story[8]}<br /><br />
        {story[9]}<br /><br />
        {story[10]}   
    </div>
    );
}

export default StoryCreator;
export {story};

