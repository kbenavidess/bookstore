const inicialState = {
  isLogged: false,
  logginError: "",
  loggedUser: {}
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case "logIn":
      return {
        ...state,
        isLogged: true,
        loggedUser: action.user,
        logginError: ""
      };
    case "logInError":
      return {
        ...state,
        logginError: action.error
      };
    case "logOut":
      return {
        ...state,
        isLogged: false,
        loggedUser: {}
      };
    default:
      return state;
  }
};

export const logIn = val => {
  return dispatch => {
    return setTimeout(() => {
      if (val.correo === "kevin.benavides@live.com" && val.clave === "123") {
        val.nombre = "Kevin";
        dispatch({
          type: "logIn",
          user: val
        });
      } else {
        dispatch({
          type: "logInError",
          error: "Hay un problema en su información"
        });
      }
    }, 100);
  };
};

export const LogOut = () => {
  return dispatch => {
    dispatch({
      type: "logOut"
    });
  };
};
