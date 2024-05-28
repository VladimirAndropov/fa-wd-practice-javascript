import { useState, createRef, Component, Fragment } from "react";

export default function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const usernameField = createRef();
  const passwordField = createRef();

  const handleLogin = () => {
    console.log(usernameField, passwordField);
    if (
      isLoggedIn ||
      (usernameField.current.dataset.valid == "true" &&
        passwordField.current.dataset.valid == "true")
    )
      setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Fragment>
      <h1>{isLoggedIn ? "Logged in" : "Logged out"}</h1>
      <form>
        {!isLoggedIn && (
          <Fragment>
            <div className="login-row">
              <label className="login-row__label" htmlFor="username-input">
                username
              </label>
              <InputField
                inputRef={usernameField}
                id="username-input"
                type="text"
              />
            </div>
            <div className="login-row">
              <label className="login-row__label" htmlFor="password-input">
                password
              </label>
              <InputField
                inputRef={passwordField}
                id="password-input"
                type="password"
              />
            </div>
          </Fragment>
        )}
      </form>
      <button className="round-field" onClick={handleLogin}>
        {isLoggedIn ? "LOG OUT" : "LOG IN"}
      </button>
    </Fragment>
  );
}

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", valid: false };
    this.onChange = this.onChange.bind(this);
  }

  validate(name) {
    return name.length > 0;
  }

  onChange(e) {
    const value = e.target.value;
    const valid = this.validate(value);
    this.setState({ value, valid });
  }

  render() {
    const borderColor = this.state.valid === true ? "green" : "red";
    return (
      <input
        className="round-field"
        type={this.props.type}
        ref={this.props.inputRef}
        value={this.state.value}
        data-valid={this.state.valid}
        onChange={this.onChange}
        style={{ borderColor }}
        id={this.props.id}
      />
    );
  }
}
