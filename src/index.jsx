import Post from "./Post";
import "@/style.css";
import * as $ from "jquery"
import "./scss.scss"
import React from "react";
import {render} from "react-dom";
import {createRoot} from "react-dom/client";
import './babel'

const post = new Post('Webpack Post Title');

const App = () => (
    <div className="container">
        <h1>"Теситрование вебпака"</h1>
        <h2></h2>
        <div className="test-scss">SCSS</div>
    </div>
)

const root = createRoot(document.getElementById('app'));
root.render(<App /> )

// let h2 = document.querySelector('h2')
// h2.classList.add('test2')
// h2.innerHTML = post.toString()
// setTimeout( () => {
//     $('h2').addClass('test2').html(post.toString());
// }, 1000)
// $('h2').addClass('test2').html(post.toString());
console.log('Post to string:', post.toString());