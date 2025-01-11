import { useState } from 'react'
import React, { Component } from 'react'
import './App.css'


class App extends React.Component {
  render() {
    return (
      <div>
        <Quoteblock />
      </div>
    )
  }
}

class Quoteblock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: {
        quote: 'Death',
        author: 'spookyguy'
      },
      color: 'black'
    }
    
  }



  render() {
    const colors = [
      "black", "navy", "maroon", "darkgreen", "teal", "darkblue", "purple", "darkred", 
      "indigo", "forestgreen", "saddlebrown", "midnightblue", "crimson", "darkslategray", 
      "chocolate", "firebrick", "darkmagenta", "olive", "darkviolet", "royalblue", 
      "darkolivegreen", "darkcyan", "steelblue", "brown", "darkorchid", "slateblue", 
      "seagreen", "darkgoldenrod", "cadetblue", "dimgray", "mediumvioletred"
    ];
    const quotes = [
      {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
      },
      {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
      },
      {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
      },
      {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
      },
      {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
      },
      {
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
      },
      {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
      },
      {
        quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        author: "Buddha"
      },
      {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
      },
      {
        quote: "Happiness is not something ready-made. It comes from your own actions.",
        author: "Dalai Lama"
      },
      {
        quote: "Don’t watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
      },
      {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James"
      },
      {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
      },
      {
        quote: "Everything you’ve ever wanted is on the other side of fear.",
        author: "George Addair"
      },
      {
        quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson"
      },
      {
        quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
        author: "Walt Whitman"
      },
      {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
      },
      {
        quote: "It is not the years in your life that count. It’s the life in your years.",
        author: "Abraham Lincoln"
      },
      {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
      },
      {
        quote: "Success is getting what you want. Happiness is wanting what you get.",
        author: "Dale Carnegie"
      },
      {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
      },
      {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
      },
      {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
      },
      {
        quote: "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
        author: "James Baldwin"
      },
      {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison"
      },
      {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
      },
      {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
      },
      {
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey"
      },
      {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
      },
      {
        quote: "To handle yourself, use your head; to handle others, use your heart.",
        author: "Eleanor Roosevelt"
      }
    ];
    
    const randomSht = () => {
      this.setState({ 
        color: colors[Math.floor(Math.random() * colors.length)], 
        quotes: quotes[Math.floor(Math.random() * quotes.length)]
      })
    }

    return (
      <section id="quote-section" style={{ backgroundColor: this.state.color }}>
        <div id="quote-box">
          <div id="quote-flex">
            <div id="text" style={{ color:  this.state.color}}>
              <h1>"<span>{this.state.quotes.quote}</span>"</h1>
            </div>
            <div id="author" style={{ color: this.state.color }}>
              <h4>- {this.state.quotes.author}</h4>
            </div>
          </div>
          <div className="controls">
            <button id="new-quote" onClick={randomSht}  style={{ backgroundColor: this.state.color }}>New Quote</button>
          </div>
        </div>
      </section>
    )

  }
}




export default App
