import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function Home() {
    return (
        <>
            <div id="page" className="mt-5">
                <h3 className="mb-3">Welcome</h3>
                <p>This is my space to word vomit about my hobbies.</p>
                <p><strong><Link to="/cassie" className="link">Proceed if you dare.</Link></strong> Or don't. Up to you.</p>
            </div>
        </>
    )
}

export default Home