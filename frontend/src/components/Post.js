import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {getPosts} from '../actions/posts'


class Post extends Component{
	componentDidMount(){
		this.props.getPosts()
	}
	render(){
		const posts = this.props.posts || [];
		console.log(posts);
		return(
			<ul className="container-plate">
			{posts.map((post) =>
				<li key={post.id} className="post-plate">
			        <div className="date">{post.timestamp}</div>
			        <div className="title">{post.title}</div>
			        <div className="author">{post.author}</div>
			        <div className="snap">{post.body}</div>
			        <div className="vote">{post.voteScore}</div>
	    		</li>
	    		)}
	    	</ul>)
	}
}

function mapStateToProps({posts}){
	return {
		posts
	}
}

export default withRouter(connect(mapStateToProps,
  { getPosts }
)(Post));