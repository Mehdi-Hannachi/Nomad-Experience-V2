import axios from "axios";

/********* *******************    User register action creator ********************************** */

import {
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_REGISTER,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS,
} from "../actionsTypes/userActionsTypes";

export const userRegiter = (payload) => async (dispatch) => {
  dispatch({ type: USER_REGISTER });

  try {
    const res = await axios.post("/user/register", payload);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data.msg });
  } catch (error) {
    console.log("register error", error);
    dispatch({ type: USER_REGISTER_FAILED, payload: error.res.data.msg });
  }
};

/********* *******************    User Longin action creator ********************************** */
export const userLogin = (payload) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });

  try {
    const res = await axios.post("/user/login", payload);
    localStorage.setItem("token", res.data.token);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.token });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAILED, payload: error.res.data.msg });
  }
};

/********* *******************    Get profile action creator ********************************** */
