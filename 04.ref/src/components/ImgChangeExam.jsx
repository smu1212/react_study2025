import React, { useState, useRef } from 'react'

const ImgChangeExam = () => {

    let keywordRef = useRef();
    let imgRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();

        if(keywordRef.current.value === "하늘") {
            console.log(imgRef);
            imgRef.current.src = "https://t3.ftcdn.net/jpg/07/56/83/92/360_F_756839279_FWX5NijrhIP9I3IUTNC6ZvCS6P0lEieY.jpg";
        } else {
            imgRef.current.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sVVEQfItUQOUsHGUdf4SSjG7wxQppnC7labtwPpbQgxrEPgYLeuFHRk&s";
        }

        // 입력창의 내용을 초기화하고 해당 요소를 선택하는 기능
        keywordRef.current.value = '';
        keywordRef.current.focus();
    }

    return (
        <div onClick={handleClick}>
            <p>희망하는 사진이 있으신가요?</p>
            <form>
                <input type="text" ref={keywordRef}/>
                <input type="submit" value="변경"/>
            </form>
            <p>
                <img 
                    style={{width:150, height:150}}
                    ref={imgRef}
                    src="https://t3.ftcdn.net/jpg/07/56/83/92/360_F_756839279_FWX5NijrhIP9I3IUTNC6ZvCS6P0lEieY.jpg"/>
            </p>
        </div>
    )
}

export default ImgChangeExam
