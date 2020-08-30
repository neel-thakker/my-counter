import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageurl: "https://picsum.photos/200",
    tag: ["tag1", "tag2", "tag3"],
    product: {
      id: 1,
    },
  };

  renderTags() {
    if (this.state.tag.length === 0) return <div>"The list is empty"</div>;

    return (
      <ul>
        {this.state.tag.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = (product) => {
    console.log("Hey there, I'm pushed!!");
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let classes = this.getBadgeColors();

    return (
      <React.Fragment>
        <div>
          <img className="m-2" src={this.state.imageurl} alt="" />
        </div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.state.product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tag.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        {this.state.tag.length === 0 && "Please create a new tag!!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeColors() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
