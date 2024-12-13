const link = "https://api.durlavparajuli.com.np/api";

export const fetchData = async(endpoint)=>{
    const res = await fetch(`${link}/${endpoint}`);
    const data = await res.json();
    return data;
  }
export const postData = async(endpoint)=>{
    const res = await fetch(`${link}/${endpoint}`,{
    method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
    const data = await res.json();
    return data;
  }
