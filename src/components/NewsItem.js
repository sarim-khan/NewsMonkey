import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props
    return (
        <div>
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className=" badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={imageUrl ? imageUrl : "https://images.unsplash.com/photo-1502772066658-3006ff41449b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1893&q=80"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div >
    )
}

export default NewsItem