import React, { Component } from "react";

class Counter extends Component {
  render() {
    let classes = this.getBadgeColors();

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={classes}>{this.formatCount()}</span>
          </div>
          <div className="col-2">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              x
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeColors() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
