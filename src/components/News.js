import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    constructor() {
        super();
        console.log('Hello I am a constructor from News component');
        this.state = {
            articles: [],
            loading: true,
        };
    }
    async componentDidMount() {
        let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f1dcf97d42c84d78a8f19afd6aecde6c';
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log('parsedData', parsedData);
        this.setState({ articles: parsedData.articles, loading: false });
    }

    render() {
        const { articles, loading } = this.state;

        if (loading) {
            return <div className='container my-3'>Loading...</div>;
        }

        return (
            <div className='container my-3'>
                <h2>NewsRickster - Top Headlines</h2>
                <div className='row'>
                    {articles.map((element) => (
                        <div className='col-md-4'
                            key={element.url}>

                            <NewsItem title={element.title}
                                description={element.description}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default News;