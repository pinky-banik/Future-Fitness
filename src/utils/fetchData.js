export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '9bca64d1eamsh493f48f406a3efcp1e1cc7jsn4167bc7dffb0' ,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

const fetchData = async(url,options) => {
    const response =await fetch(url,options);
    const data = await response.json();
    return data;
};

export default fetchData;