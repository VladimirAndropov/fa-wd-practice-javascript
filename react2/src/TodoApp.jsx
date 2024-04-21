import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faGamepad,
  faBriefcase,
  faRemove,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "", category: "работа" };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  render() {
    const categories = [
      { name: "работа", icon: faBriefcase },
      { name: "учёба", icon: faBook },
      { name: "личное", icon: faHome },
      { name: "отдых", icon: faGamepad },
    ];

    return (
      <div>
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <input
            className="round-field"
            onChange={this.handleTextChange}
            value={this.state.text}
            placeholder="что нужно сделать"
            style={{ marginRight: "2em" }}
          />
          <select
            className="round-field"
            value={this.state.category.name}
            onChange={this.handleCategoryChange}
            style={{ marginRight: "2em" }}
          >
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <button className="round-field">
            <FontAwesomeIcon icon={faAdd} color="green" />{" "}
          </button>
        </form>
        {categories.map((category) => (
          <div key={category.name}>
            <TodoList
              category={category}
              items={this.state.items.filter(
                (item) => item.category === category.name,
              )}
              onRemove={this.handleRemove}
            />
          </div>
        ))}
      </div>
    );
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleCategoryChange(e) {
    this.setState({ category: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.trim() === "") {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      category: this.state.category,
    };
    console.log(newItem);
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }

  handleRemove(id) {
    this.setState((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.toggleList = this.toggleList.bind(this);
  }

  toggleList() {
    this.setState((state) => ({
      open: !state.open,
    }));
  }

  render() {
    return (
      <div>
        <button className="collapsible" onClick={this.toggleList}>
          <FontAwesomeIcon icon={this.props.category.icon} />
          {" " + this.props.category.name + " "}
          <span style={{ color: "#530909" }}>{this.props.items.length}</span>
        </button>
        <div className={"content" + (this.state.open ? " open" : "")}>
          <ul style={{ marginTop: "0.7em" }}>
            {this.props.items.map((item) => (
              <li key={item.id}>
                {item.text}
                <button
                  onClick={() => this.props.onRemove(item.id)}
                  style={{ marginLeft: "0.5em" }}
                >
                  <FontAwesomeIcon icon={faRemove} color="red" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
