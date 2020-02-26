import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://github.com/lehuyl" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/-stevenle/" className="icon fa-linkedin"><span className="label">Dribbble</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
