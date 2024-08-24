import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function Home() {
    return (
        <>
            <div id="page" class="mt-5">
                <h3 class="mb-3">Welcome</h3>
                <p>This is my space to word vomit about my hobbies.</p>
                <p><strong><a as={Link} to="/cassie" className="link">Proceed if you dare.</a></strong> Or don't. Up to you.</p>
            </div>
        </>
    )
}

export default Home