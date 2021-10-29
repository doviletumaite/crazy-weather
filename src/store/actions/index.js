export const fetchData = (endPoint) => {
    return async (dispatch, getState) => {
      try {
        let resp = await fetch(endPoint);
        console.log("endpoint in action",endPoint )
        if (resp.ok) {
          const{ data } = await resp.json();
          
          console.log(data)
          dispatch({
            type: "FETCH_DATA",
            payload: data,
          });
          console.log("data",data)
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    };
  };