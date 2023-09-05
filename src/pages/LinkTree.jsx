import {Link} from 'react-router-dom';

const LinkTree = () =>{
    return <div className="linktree">
        <div className="profile-container">
            <img className='myimg' src="/ibms.jpg" alt="profile-image" />
            <p className="myname">
                <span>Ibrahim Ansari</span>
                <span>Mern Stack Developer</span>
            </p>
        </div>
        <div className="mylinks">
            <h2>My Scoail Links</h2>
            <div className="links">
                <Link to='#' target='_blank'>
                    <img src='/project-images/linkedin.svg' alt='linkedin' />
                    <span>Linkedin</span>
                </Link>
                <Link to='#' target='_blank'>
                <img src='/project-images/github.svg' alt='github' />
                    <span>Github</span>
                </Link>
                <Link to='#' target='_blank'>
                    <img src='/project-images/leetcode.svg' alt='leetcode' />
                    <span>LeetCode</span>
                </Link>
                <Link to='#' target='_blank'>
                    <img src='/project-images/geeksforgeeks.svg' alt='x' />
                    <span>GeeksforGeeks</span>
                </Link>
                <Link to='#' target='_blank'>
                    <img src='/project-images/x.png' alt='x' />
                    <span>X(Twitter)</span>
                </Link>
                <Link to='#' target='_blank'>
                    <img src='/project-images/instagram.svg' alt='instagram' />
                    <span>Instagram</span>
                </Link>
                <Link to='#' target='_blank'>
                    <img src='/project-images/facebook.svg' alt='facebook' />
                    <span>Facebook</span>
                </Link>
            </div>
        </div>
        <div className="affiliated-links">
            <h2>Get 10% off on each course</h2>
            <div className="courses">
                <Link to='https://codedamn.com/a/mcn12YPCN70ImH8_c-Lfi'>
                    <span>Build Tiktok App Using React Native</span>
                    <span>Coupon code: DVHLJY - 10% off</span>
                </Link>
                <Link to='https://codedamn.com/a/l9PqrBIJIXlvVS2ne_jb1'>
                    <span>JavaScript DOM Projects</span>
                    <span>Coupon code: NGDIYS - 10% off</span>
                </Link>
                <Link to='https://codedamn.com/a/Ovc9kczvwsfMm33Qq5_ko'>
                    <span>Express JS</span>
                    <span>Coupon code: ADLJZP - 10% off</span>
                </Link>
                <Link to='https://codedamn.com/a/2n1iL1ymrXP9bcCc2LEfC'>
                    <span>Vue.js Essentials: A Comprehensive Introduction</span>
                    <span>Coupon code: QBDQOM - 10% off</span>
                </Link>
                <Link to='https://codedamn.com/a/Hbs7LLTQn8IAGvf-96tf8'>
                    <span>Advanced CSS with SCSS</span>
                    <span>Coupon code: EAMUNB - 10% off</span>
                </Link>
                <Link to='https://codedamn.com/a/l6HRsSAQDjWbgkhVHCIjA'>
                    <span>Learn Tailwind CSS 3 - A utility-first CSS framework</span>
                    <span>Coupon code: TQFNO - 10% off</span>
                </Link>
                <Link to='https://codedamn.com/a/cF0nndJqI5ZgrzKO7hE56'>
                    <span>Advanced React Hooks Course</span>
                    <span>Coupon code: SCBNKF - 10% off</span>
                </Link>
                <Link to='https://codedamn.com/a/oB-GHxjPiWmxdox-FQ2Fr'>
                    <span>Learn Redux Toolkit: Global state management in React</span>
                    <span>Coupon code: HRYKGG - 10% off</span>
                </Link>
                <Link to='https://codedamn.com/a/bsT1I0qC9RwT7386tuLsP'>
                    <span>Advanced Node.js Course</span>
                    <span>Coupon code: YGFNOL - 10% off</span>
                </Link>
                <Link to='https://codedamn.com/a/IMPkJozfVScQhAyhG5jFI'>
                    <span>MERN Stack with Blog Project</span>
                    <span>Coupon code: RJBYPS - 10% off</span>
                </Link>
            </div>
        </div>
    </div>
}

export default LinkTree;