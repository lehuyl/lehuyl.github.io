import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import profile from 'https://github.com/lehuyl/personal-website/blob/e3644bdcecc6966f93d92e010ffb5c28257116d7/src/assets/images/profile.png'


class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={profile} alt="Site Profile Picture" /></a>
                    <h1><strong>Steven Le</strong></h1>
                    <h1>Software Developer Intern</h1>
                    <h1>I like to gym and learn new things in my spare time.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
