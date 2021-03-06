/*eslint no-unused-vars: "off"*/
/*eslint no-useless-concat: "off"*/
/*eslint radix: "off"*/
import React, { Component } from 'react';
import firebase from '../firebase.js';

// import './css/browse.css';

let databaseArray =[];
let storyNumber = 2;
let storyTitle, storyBody;



class Browse extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        'story': '',
        'savedStory': ''
    };
}

    componentWillMount(){
        this.loadData();
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
        this.findStory();
    }

    findStory(){
        if(databaseArray.length === 0){
            setTimeout(this.findStory.bind(this), 10);
        }
        else{
            storyNumber = Math.floor((Math.random() * databaseArray.length/13) + 0)
        }
        for(let i = 0; i < databaseArray.length; i++){
            if(databaseArray[i] === storyNumber){
                storyTitle = databaseArray[i + 1];
                storyBody = 
                <div>
                    {databaseArray[i - 11]}<br /><br />
                    {databaseArray[i - 10]}<br /><br />
                    {databaseArray[i - 9]}<br /><br />
                    {databaseArray[i - 8]}<br /><br />
                    {databaseArray[i - 7]}<br /><br />
                    {databaseArray[i - 6]}<br /><br />
                    {databaseArray[i - 5]}<br /><br />
                    {databaseArray[i - 4]}<br /><br />
                    {databaseArray[i - 3]}<br /><br />
                    {databaseArray[i - 2]}<br /><br />
                    {databaseArray[i - 1]}<br /><br />
                </div>
                console.clear();
                console.log("%c Thank you for you taking the time to look at my project.  If you would like to see the underlying code you can visit: https://github.com/AlexCassell/StoryTime", 'background: black; color: white')
                this.setState({story: ''});
            }
        }
    }

    render() {
        return (
            <div className="story">
                <div className="story__title">
                    <h1>{storyTitle}</h1>
                </div>
                <div className="storyWrapper">
                    {storyBody}
                </div>
            </div>
            )
        }

}

export default Browse;