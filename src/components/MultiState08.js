import React, {useState} from 'react';

const MultiState08 = () => {
  //1. 이름 입력상태 정의
  const [name, setName] = useState("");
  //2. 나이 입력 상태 정의
  const [age, setAge] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  } 
  const onChangeAge = (e) => {
    setAge(e.target.value);
  }

  return (
    <div>
      <div>
        {/* 3. 입력 태그 작성 */}
      <input type="text" onChange={onChangeName}/>
      <input type="text" onChange={onChangeAge}/>
      </div>
      <div>
        <h3>이름 : {name}</h3>
        <h4>나이 : {age}</h4>
      </div>
    </div>
  );
};

export default MultiState08;