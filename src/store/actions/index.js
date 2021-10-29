export const fetchData = (url, query) => {
    return async (dispatch, getState) => {
      try {
        let resp = await fetch(url + query);
        if (resp.ok) {
          const { data } = await resp.json();
          dispatch({
            type: "FETCH_DATA",
            payload: data,
          });
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    };
  };