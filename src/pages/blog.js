import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import blogStyles from "./blog.module.scss"

import Head from "../components/head"
import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((value, key) => {
          return (
            <li key={key} className={blogStyles.post}>
              <Link to={"/blog/" + value.node.slug}>
                <h2>{value.node.title}</h2>
                <p>{value.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
