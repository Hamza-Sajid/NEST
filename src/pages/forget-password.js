import React from 'react';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import ForgetPasswordMain from '../components/ForgetPassword/ForgetPasswordMain';
import HeaderFour from '../components/Layout/Header/HeaderStyleFour';

class SignIn extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderFour />
            <ForgetPasswordMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default SignIn;