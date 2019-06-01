import React from "react";
import "./Login.css";
import { Formik } from "formik";

export default class Login extends React.Component {
  onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    console.log(values);
    alert("lelga");
  };

  render() {
    return (
      <div id="login-page" className="row">
        <div className="row" />
        <div className="row" />
        <div className="row">
          <h5 className="center-align">Login BookStore</h5>
        </div>
        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          onSubmit={this.onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
            <div class="col s12 z-depth-6 card-panel">
              <form
                onSubmit={handleSubmit}
                className="login-form col s12"
                validate="false"
              >
                <div className="row" />
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      className="validate"
                    />
                    <label htmlFor="username">Nombre Usuario</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i class="material-icons prefix">lock_outline</i>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      className="validate"
                    />
                    <label htmlFor="password">Contraseña</label>
                  </div>
                </div>
                <button
                  className="btn waves-effect waves-light col s12 ButtonColor"
                  type="submit"
                  name="action"
                >
                  Login
                </button>
                <div className="row" />
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}
