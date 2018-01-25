import React, { Component } from 'react';
import './css/create.css';
let inputArray = [["Buster Bear Goes Fishing", "THORNTON W. BURGESS"], ["Alex", "Judith", "Caleb", "Calliope", "Rajah"], ["Green Forest", "Laughing Brook", "court", "comedy club", "skating rink"], ["letter", "paper", "bribe", "hammer", "microscope"], ["Bear", "Sqirrel", "House Cat", "Wolf", "Otter"], ["argued in court", "filed some paperwork", "hid from aliens", "talked with the judge", "ate a banana"]];

let inputType = 0, count = 0; 

// protagonistsCount = 0, placesCount = 0, objectsCount = 0, jobActionsCount = 0, 

class Create extends Component {

count(number, type){
    inputType = type;
    count = number;
}

protagonists(e){
    inputArray[inputType][count] = e.target.value;
    // console.log(inputArray);
}

    render() {
        console.clear();
        console.log("%c Thank you for you taking the time to look at my project.  If you would like to see the underlying code you can visit: https://github.com/AlexCassell/StoryTime", 'background: black; color: white');
        return (
            <div className="create">
                <div className="create__title">
                    <h1>Create Your Story!</h1>
                    <div className="container">
                        <div className="item storyInfo">
                            <div className="inputForms">
                                Title:<br />
                                <input className="inputForms__properties inputForms__infoBackground"  placeholder={inputArray[0][0]} type="text" name="title" onFocus={ (e) => this.count(0, 0) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                Author:<br />
                                <input className="inputForms__properties inputForms__infoBackground"  placeholder={inputArray[0][1]} type="text" name="title" onFocus={ (e) => this.count(1, 0) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                        </div>
                        <div className="item characters">
                            <div className="inputForms">
                                The 1st protagonist's name:<br />
                                <input className="inputForms__properties inputForms__charactersBackground" placeholder={inputArray[1][0]} type="text" name="protagonistOne" onFocus={ (e) => this.count(0, 1) } onChange={ (e) => this.protagonists(e) }/>
                                <div className="checkboxWrapper">
                                </div>
                            </div>
                            <div className="inputForms">
                                The 2nd protagonist's name:<br />
                                <input className="inputForms__properties inputForms__charactersBackground" placeholder={inputArray[1][1]} type="text" name="protagonistTwo" onFocus={ (e) => this.count(1, 1) } onChange={ (e) => this.protagonists(e) }/>
                                <div className="checkboxWrapper">
                                </div>
                            </div>
                            <div className="inputForms">
                                The 3rd protagonist's name:<br />
                                <input className="inputForms__properties inputForms__charactersBackground" placeholder={inputArray[1][2]} type="text" name="protagonistThree" onFocus={ (e) => this.count(2, 1) } onChange={ (e) => this.protagonists(e) }/>
                                <div className="checkboxWrapper">
                                </div>
                            </div>
                            <div className="inputForms">
                                The 4th protagonist's name:<br />
                                <input className="inputForms__properties inputForms__charactersBackground" placeholder={inputArray[1][3]} type="text" name="protagonistFour" onFocus={ (e) => this.count(3, 1) } onChange={ (e) => this.protagonists(e) }/>
                                <div className="checkboxWrapper">
                                </div>
                            </div>
                            <div className="inputForms">
                                The 5th protagonist's name:<br />
                                <input className="inputForms__properties inputForms__charactersBackground" placeholder={inputArray[1][4]} type="text" name="protagonistFive" onFocus={ (e) => this.count(4, 1) } onChange={ (e) => this.protagonists(e) }/>
                                <div className="checkboxWrapper">
                                </div>
                            </div>
                        </div>
                        <div className="item locations">
                            <div className="inputForms">
                                The 1st location:<br />
                                <input className="inputForms__properties inputForms__locationsBackground" placeholder={inputArray[2][0]} type="text" name="placeOne" onFocus={ (e) => this.count(0, 2) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 2nd location:<br />
                                <input className="inputForms__properties inputForms__locationsBackground" placeholder={inputArray[2][1]} type="text" name="placeOne" onFocus={ (e) => this.count(0, 2) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 3rd location:<br />
                                <input className="inputForms__properties inputForms__locationsBackground" placeholder={inputArray[2][2]} type="text" name="placeOne" onFocus={ (e) => this.count(0, 2) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 4th location:<br />
                                <input className="inputForms__properties inputForms__locationsBackground" placeholder={inputArray[2][3]} type="text" name="placeOne" onFocus={ (e) => this.count(0, 2) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 5th location:<br />
                                <input className="inputForms__properties inputForms__locationsBackground" placeholder={inputArray[2][4]} type="text" name="placeOne" onFocus={ (e) => this.count(0, 2) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                        </div>
                        <div className="item objects">
                            <div className="inputForms">
                                The 1st object:<br />
                                <input className="inputForms__properties inputForms__objectsBackground" placeholder={inputArray[3][0]} type="text" name="ObjectOne" onFocus={ (e) => this.count(0, 3) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 2nd object:<br />
                                <input className="inputForms__properties inputForms__objectsBackground" placeholder={inputArray[3][1]} type="text" name="ObjectOne" onFocus={ (e) => this.count(0, 3) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 3rd object:<br />
                                <input className="inputForms__properties inputForms__objectsBackground" placeholder={inputArray[3][2]} type="text" name="ObjectOne" onFocus={ (e) => this.count(0, 3) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 4th object:<br />
                                <input className="inputForms__properties inputForms__objectsBackground" placeholder={inputArray[3][3]} type="text" name="ObjectOne" onFocus={ (e) => this.count(0, 3) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 5th object:<br />
                                <input className="inputForms__properties inputForms__objectsBackground" placeholder={inputArray[3][4]} type="text" name="ObjectOne" onFocus={ (e) => this.count(0, 3) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                        </div>
                        <div className="item jobs">
                            <div className="inputForms">
                                The 1st animals's species:<br />
                                <input className="inputForms__properties inputForms__jobsBackground" placeholder={inputArray[4][0]} type="text" name="JobOne" onFocus={ (e) => this.count(0, 4) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 2nd animals's species:<br />
                                <input className="inputForms__properties inputForms__jobsBackground" placeholder={inputArray[4][1]} type="text" name="JobOne" onFocus={ (e) => this.count(0, 4) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 3rd animals's species:<br />
                                <input className="inputForms__properties inputForms__jobsBackground" placeholder={inputArray[4][2]} type="text" name="JobOne" onFocus={ (e) => this.count(0, 4) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 4th animals's species:<br />
                                <input className="inputForms__properties inputForms__jobsBackground" placeholder={inputArray[4][3]} type="text" name="JobOne" onFocus={ (e) => this.count(0, 4) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 5th animals's species:<br />
                                <input className="inputForms__properties inputForms__jobsBackground" placeholder={inputArray[4][4]} type="text" name="JobOne" onFocus={ (e) => this.count(0, 4) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                        </div>
                        <div className="item firstActions">
                            <div className="inputForms">
                                The 1st animals first action:<br />
                                <input className="inputForms__properties inputForms__jobsActionsBackground" placeholder={inputArray[5][0]} type="text" name="JobOne" onFocus={ (e) => this.count(0, 5) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 2nd animals first action:<br />
                                <input className="inputForms__properties inputForms__jobsActionsBackground" placeholder={inputArray[5][1]} type="text" name="JobOne" onFocus={ (e) => this.count(0, 5) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 3rd animals first action:<br />
                                <input className="inputForms__properties inputForms__jobsActionsBackground" placeholder={inputArray[5][2]} type="text" name="JobOne" onFocus={ (e) => this.count(0, 5) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 4th animals first action:<br />
                                <input className="inputForms__properties inputForms__jobsActionsBackground" placeholder={inputArray[5][3]} type="text" name="JobOne" onFocus={ (e) => this.count(0, 5) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                            <div className="inputForms">
                                The 5th animals first action:<br />
                                <input className="inputForms__properties inputForms__jobsActionsBackground" placeholder={inputArray[5][4]} type="text" name="JobOne" onFocus={ (e) => this.count(0, 5) } onChange={ (e) => this.protagonists(e) }/>
                            </div>
                        </div>
                        <div>
                            <br />
                            This fullstack web app is for demo purposes only.  Quite a few things are not fully implemented.  It will become the basis for 
                            my Twitter Bot project's chat and post functions.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create;
export{inputArray};