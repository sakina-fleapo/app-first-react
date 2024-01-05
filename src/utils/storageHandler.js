export const getData = () => {
  const data = localStorage.getItem("student_list");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const setData = (data) => {
  localStorage.setItem("student_list", JSON.stringify(data));
};
