export function solve_06_callback_hell_rescue() {
  function fetchData(callback) {
    callback(null, "Data");
  }
  function processData(data, callback) {
    callback(null, `${data} Processed`);
  }

  let result;
  let error;

  fetchData((err, data) => {
    if (err) {
      error = err; return;
    }
    processData(data, (err, processed) => {
      if (err) {
        error = err;
        return;
      }
      result = processed;
    });
  });
  return error || result;
}

