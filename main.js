//pseudo code
//Use data returned from one api to make a request to another api and display the data returned
//first search for a working api
//try the api in postman make sure it is working
//start the code with event listener to pull info from function
//create the function 
//create a fech for fist api and after pulling data from it
//use the data retuened from first one
//get another working api
//make a request to second api using fetch with retuned data from first one
//display the data
//https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
document.querySelector('button').addEventListener('click', getInfo);

function getInfo() {
    const info = document.querySelector('input').value;
    const url = `https://api.rss2json.com/v1/api.json?rss_url=https://techcrunch.com/feed/`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('img').src = data.feed.image;
            document.querySelector('h1').innerText = data.feed.title;
            document.querySelector('h3').innerText = data.feed.description;
            document.querySelector('h2').innerText = data.items[8].title;

            // Use title of the 8th item OR model from input field
            // I did my code on my own and couldn't make this part work to get my first function linked to second one and used chat gpt to find what was wrong
            const model = document.querySelector('#op').value || "Tesla_Model_S";
            getTesla(model); 
        })
        .catch((err) => console.error(err));
}

function getTesla(title) {
    const url1 = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;

    fetch(url1)
        .then(res => res.json())
        .then(da => {
            console.log(da);
            
            const imgUrl = da.originalimage?.source || da.thumbnail?.source || '';

            if (imgUrl) {
                document.querySelector('#bb').src = imgUrl;
            } else {
                document.querySelector('#bb').alt = "No image found";
            }
        })
        .catch((err) => console.error(err));
}




