# **Movie Fight**

Movie Fight is a front-end only movie comparison app built with vanilla JS. It uses the _[Open Movie Database](https://omdbapi.com)_ to collect movie information and compare various statistics about those.

## **Libraries and Frameworks**

> [BulmaCSS](https://bulma.io/)

> [Axios](https://github.com/axios/axios)

> [Font Awesome](https://fontawesome.com/)

### **Features**

1. Compare two movies side-by-side
2. Search movies by full or partial name
3. **Auto-completion feature in the search box**
4. Highlight which movie is won in which category
5. Show movie posters and release year

### **Challenges and Solutions**

1. **_Information_** : Collected from [OMDB](https://omdbapi.com) API. It allows 1000 free requests per day and much more for paid users.

- Used search endpoint for auto-complete and search results
- Used result endpoint to show comparison result

2. **_Autocomplete Search_** : It's a completely reusable suggestion component built from scratch using vanilla JS and BulmaCSS. Can be included to project by just adding one line of HTML and a few classes!

3. **_Highlight Winner_** : Highlighting which movie has better awards and votes is done by adding data attribute to HTMLElements.

> This is a basic project made just for practice. Please check carefully for using for anything other than educational purpose! Also it uses many ES2015+ features so might not support all browser before transpiling.
