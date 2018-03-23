import React from "react";
import { withRouter } from "react-router"

class DeletePost extends React.Component{

  deletePost(){
    const that = this
    const slug = this.props.match.params.slug;
    const token = "Bearer " + localStorage.getItem("jwt");
    fetch(`/api/posts/${slug}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "Authorization": token }
    })
    .then(response => {
      if (response.ok) {
        that.props.history.push("/posts");
      }
      else {
        that.props.history.push(`/posts/${slug}`)
      }
    });
  }
}
