import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import base64 from "base-64";
import snapshot from "./snapshot";
import Comments from "./Comments";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
const headers = {
    Accept: "application/vnd.github.v3.json",
    Authorization: `Basic ${base64.encode(accessToken + ":")}`,
};

export default class Post extends Component {
  state = {
    content: null,
  };

  fetchData() {
    return this.fetchGistMarkdownUrl(this.props.gist)
      .then(this.fetchGistMarkdownText)
      .then(this.fetchRenderedMarkdown);
  }

  fetchGistMarkdownUrl(id) {
    return fetch(`https://api.github.com/gists/${id}`, { headers })
      .then(response => response.json())
      .then(json => Object.values(json.files)[0].raw_url);
  }

  fetchGistMarkdownText(rawUrl) {
    return fetch(rawUrl).then(response => response.text());
  }

  fetchRenderedMarkdown(text) {
    return fetch("https://api.github.com/markdown", {
      headers,
      method: "POST",
      body: JSON.stringify({ text }),
    }).then(response => response.text());
  }

  componentDidMount() {
    this.fetchData().then(content => this.setState({ content }));
  }

  render() {
    const { date, title, gist } = this.props;
    const { content } = this.state;

    return (
      <Fragment>
        <Helmet>
          <title>{title}</title>
        </Helmet>

        <h1>
          <NavLink to="/">Blog</NavLink>
        </h1>
        <h2>{title}</h2>
        <em>{date}</em>

        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div id="comments-root" data-gist={gist} />
        {!snapshot && <Comments gist={gist} />}

        <a href={`https://gist.github.com/${gist}#comments`}>
            Write a comment on GitHub
        </a>
      </Fragment>
    );
  }
}