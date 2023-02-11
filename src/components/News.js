import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f1dcf97d42c84d78a8f19afd6aecde6c";
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log("parsedData", parsedData);
        this.setState({articles: parsedData.articles})
    }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsRickster - Top Headlines</h2>
                {/* printing two times in console don't know why 
                looping the articles array using element notice how he has not used the for loop*/}
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

export default News