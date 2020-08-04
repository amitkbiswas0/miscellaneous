/**
 * Executes callback at given delay
 * @param {function} callback The function to be debounced
 * @param {time} delay in millisecond , default 1000ms
 */
const debounce = (callback, delay = 1000) => {
  let timeoutID = null;
  return (...args) => {
    const context = this;
    // clearing setTimeouts for non-waiting keystrokes
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};
