import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://github.com/lehuyl" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/-stevenle/" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                        <li><a href="https://drive.google.com/open?id=1nStsrwxQiz0DyXbnG5xZ4w_9fmREYmnm" className="icon fa-file"><span className="label">Resume</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
