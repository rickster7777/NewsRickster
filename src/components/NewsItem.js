import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        console.log('imageUrl', imageUrl);
        //imageUrl = '../../public/depositphotos_1098153-stock-photo-breaking-news.webp'
        imageUrl = 'https://imgs.search.brave.com/zmHKLdSrQ9kP-1OHYOETqSgbtHH_FKYI0HPrXFHsGd0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMzLmRlcG9zaXRw/aG90b3MuY29tLzEw/MDA2ODQvMTA5L2kv/OTUwL2RlcG9zaXRw/aG90b3NfMTA5ODE1/My1zdG9jay1waG90/by1icmVha2luZy1u/ZXdzLmpwZw'
        return (
            <div className="my-3">
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" className= "btn btn-sm btn-primary"> Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;