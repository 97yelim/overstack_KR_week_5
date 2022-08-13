import React from 'react';

const SignUp = ({SignInUpToggle}) => {
    

    return (
        <form>
            <h2>회원가입하기</h2>
            <div>
                <h2>이메일</h2>
                <button>중복확인</button>
            </div>
            <input type="text" />
            <div>
                <h2>닉네임</h2>
                <button>중복확인</button>
            </div>
            <input type="text" />
            <h2>비밀번호</h2>
            <input type="text" />
            <h2>비밀번호 확인</h2>
            <input type="text" />
            <button onClick={SignInUpToggle}>회원가입 완료</button>
        </form>
    );
};

export default SignUp;