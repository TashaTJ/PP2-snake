# **Snake - Project Portfolio 2 - Javascript**

Snake is an interactive online homage to the infamous 1998 Nokia mobile game. Snake has roots in the 1976 arcade classic, Blockade, and has retianed it's legendary status largely due to it's simplistic design uncomplicated rule system. 


You can view the live site here - <a href="" target="_blank"> Snake </a>

![Snake Am I Responsive image](docs/readme-images/)

# Contents

* [Objective](<#objective>) 
* [User Experience](<#user-experience-ux>)
    * [Site Aims](<#site-aims>)
    * [User Stories](<#user-stories>)
    * [Wireframes](<#wireframes>)
    * [Site Structure](<#site-structure>)
    * [Design Choices](<#design-choices>)
    *   [Colour Scheme](<#colour-scheme>)
    *   [Typography](<#typography>)
* [Features](<#features>)
* [Future Features](<#future-features>)
* [Technologies Used](<#technologies-used>)
* [Testing](<#testing>)
    * [Code Validation](<#code-validation>)
    * [JSHint](<#jshint>)
    * [Lighthouse Testing](<#lighthouse-testing>)
    * [Accessibility Testing](<#accessibility-testing>)
    * [Responsive Testing](<#responsive-testing>)
    * [Manual Testing](<#manual-testing>)
    * [Bugs Fixed](<#bugs-fixed>)
    * [Unresolved Bugs](<#unresolved-bugs>)
* [Deployment](<#deployment>)
* [Credits](<#credits>)
* [Acknowledgements](<#acknowledgements>)

# Objective

The aim of this project is to deliver an interactive, engaging game that is visually and functionally satisfying for the user to play.

[Back to top](<#contents>)

# User Experience (UX)

## Site Aims

* To provide the user with a simple and fun interactive game
* To invoke nostalgia for the original Snake with some design throwbacks
* To create a game that encourages the user to replay and increase score 
* To provide a game that is fully responsive so the user can play across multiple platforms
* To provide an interactive experience that is easy to navigate and understand
* To provide an experience that is enjoyable but still challenging to the user so that they return to the site

## User Stories

The **user** is any person who has read the Harry Potter book series (1-7) and would like to test their Harry Potter book knowledge.

| ID | ROLE | ACTION | GOAL |
|-----------------|:-------------|:---------------:|:---------------:|
| 1 | USER | As a user, I want to be able to play Snake | So I can have some fun|
| 2 | USER | As a user, I want to be able to navigate around the interface easily | so it doesn't take me out of the experience|
| 3 | USER | As a user, I want to be able to play the game across all devices | So I can play on location, at my convenience |
| 4 | USER | As a user, I want the option of increased difficulty | So I can challenge myself |
| 5 | USER | As a user, I want to be able to start the game when I am ready | So I can prepare accordingly |
| 6 | USER | As a user, I want to be able to know my score | So I can improve on it |
| 7 | USER | As a user, I want to be able to pause the game | So I can pause if distracted |
| 8 | USER | As a user, I want to be able to start a new game when the current one ends | So I can beat my score|
| 9 | USER | As a user, I want the game to get progressively more difficult | So it's fun yet challenging |
| 10 | USER | As a user, I want the option to mute sound | So I can play without affecting others |

## Wireframes

<details> <summary> phone wireframes</summary>

![Homepage](docs/wireframes/)

![instructions](docs/wireframes/)

![settings](docs/wireframes/)

![game](docs/wireframes/)

</details>

<details> <summary> tablet wireframes</summary>

![Homepage](docs/wireframes/)

![instructions](docs/wireframes/)

![settings](docs/wireframes/)

![game](docs/wireframes/)

</details>

<details> <summary> desktop wireframes</summary>

![Homepage](docs/wireframes/)

![instructions](docs/wireframes/)

![settings](docs/wireframes/)

![game](docs/wireframes/)

</details>

## Site Structure

The game lives within a one page site with 3 different 'screens', that the user navigates through to engage with the game. 

- Screen 1  The Home screen - offers one main play button, to access the game screen, and simple game instructions 
- Screen 2  The game screen - has a game area and control buttons 
- screen 3 The game over screen - informs the user the game is over, and their current score 

Screens 2 and 3 have a top bar which offers a route back to the home page, and a toggle sound mute button. Upon the snake's collision with either a wall or itself, the user is automatically taken to the game over screen that on closure gives the option to navigate back to the home screen.

## Design Choices

### Colour Scheme

The final color theme of neon green, black and white was chosen due to it's dual personality of both past and future. Neon, to evoke the 90's, against monochrome black and white to maximize contrast and imply speed, simplicity and modernity. The dominating black background allows the neon to glow against it, and pop's both the snakeskin and apple features. 

![Site colour scheme](docs/readme-images/color-palete.png)

### Typography

The fonts chosen continue the past present theme, with 'Press Start 2P' (headings) for it's retro pixelated design and 'Lato' (body) for it's modern simple curves and easy readability to maximise enjoyment of the site.   

[Back to top](<#contents>)
