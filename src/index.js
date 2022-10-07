import Post from "./Post";
import "@/style.css";
import * as $ from "jquery"
import "./scss.scss"

const post = new Post('Webpack Post Title');

$('h2').addClass('test2').html(post.toString());
// console.log('Post to string:', post.toString());