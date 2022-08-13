import React from 'react';

const SignIn = ({SignInUpToggle}) => {
    return (
        <form>
            <h2>로그인</h2>
            <input type="text" />
            <h2>비밀번호</h2>
            <input type="text" name="" id="" />
            <button>로그인</button>
            <button onClick={SignInUpToggle}>회원가입</button>
        </form>
    );
};

export default SignIn;