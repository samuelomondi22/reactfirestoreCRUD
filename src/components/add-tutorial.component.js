import React, { Component } from "react";
//connects to the database
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    //our state that we will change in the front end
    this.state = {
      title: "",
      description: "",
      published: false,

      submitted: false,
    };
  }

  //replaces the title available with the last one the user typed
  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  //replaces the description available with the last one the user typed
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  // published the title and description on the dom incase the user wants to make changes
  // displays a successful message that it was added and changes submitted to true
  saveTutorial() {
    let data = {
      title: this.state.title,
      description: this.state.description,
      published: false
    };

    TutorialDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  // after it is successfully added it resets so user can add a new item
  newTutorial() {
    this.setState({
      title: "",
      description: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
      {/* conditional statement */}
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            {/* when the add button is clicked the newTutorial() is called */}
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
          {/* fill it up again */}
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            {/* when the submit is clicked the saveTutorial() is called */}
            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
