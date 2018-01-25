/*eslint no-unused-vars: "off"*/
/*eslint no-useless-concat: "off"*/
import React, { Component } from 'react';
import firebase from '../firebase.js';
import { inputArray }  from './Create';
import './css/story.css';
import StoryCreator from './storyCreator'
import {story} from './storyCreator'



let key, childData;
let storySave = [];
let storyDisplay = story;
let databaseArray =[];
let currentSave = "";

let storyNumber = 0;//will be set by url or display page menu

let currentStoryCount;
let count = 0;

class Story extends Component {
        constructor(props) {
        super(props);
        this.state = {
            'story': <StoryCreator />,
            'savedStory': '',
            'storyUrl': ''
        };
        this.saveStory = this.saveStory.bind(this);
    }

    componentWillMount(){
        this.loadData();
        this.refactor();
    }

    saveStory(){
        // console.log("saved");
        currentStoryCount = (databaseArray[databaseArray.length - 2] + 1);
        this.setState({savedStory: ''});  const storyRef = firebase.database().ref('stories');
        const item = {
            "storyNumber": (databaseArray[databaseArray.length - 2] + 1), 
            "title": inputArray[0][0],
            "author": inputArray[0][1],
            "paragraph a": story[0],
            "paragraph b": story[1],
            "paragraph c": story[2],
            "paragraph d": story[3],
            "paragraph e": story[4],
            "paragraph f": story[5],
            "paragraph g": story[6],
            "paragraph h": story[7],
            "paragraph i": story[8],
            "paragraph j": story[9],
            "paragraph k": story[10],
        }
        storyRef.push(item);
        this.setState({storyUrl: 
        <div className="savedLink">
            Your story has been saved and can be accessed here: <a href={'https://storytime.alexcassell.com/stories/' + currentStoryCount}>{'https://storytime.alexcassell.com/stories/' + currentStoryCount}</a>
        </div>
            });
    }

    refactor(){
        this.setState({story: <StoryCreator />});
        storyDisplay = this.state.story;
        console.clear();
        console.log("%c Thank you for you taking the time to look at my project.  If you would like to see the underlying code you can visit: https://github.com/AlexCassell/StoryTime", 'background: black; color: white')
    }

    loadData(){
        var query = firebase.database().ref("stories").orderByKey();
        query.once("value")
        .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                var childData = childSnapshot.val();

                for (const [key, value] of Object.entries(childData)) {
                    databaseArray.push(value);
                }
            });
        });
    }

    // findStory(){//will take in a number when out of testing
    //     console.log(databaseArray);//for testing //logs are always for testing you dolt
    //     for(let i = 0; i < databaseArray.length; i++){
    //         if(databaseArray[i] === storyNumber){
    //             console.log("Title: " + databaseArray[i + 1]);
    //             console.log("Story: " + databaseArray[i - 1]);
    //         }
    //     }
    // }

render() {
    return (
        <div className="story">
            <div className="story__title">
                <h1>{inputArray[0][0]}</h1>
            </div>
            <button className="button_storyRefactor" onClick={() => this.refactor()}>Refactor</button>     <button className="button_saveStory" onClick={() => this.saveStory()}>Save This Story</button>{this.state.storyUrl}
            <div className="storyWrapper">
                {storyDisplay}
            </div>
            
        </div>
        )
    }
}

export default Story;