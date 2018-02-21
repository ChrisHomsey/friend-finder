# friend-finder

**This app is hosted on Heroku! Give it a try:** https://sleepy-basin-95807.herokuapp.com

This app was an assignment in the CWRU Coding Bootcamp. The idea was to use **Node.js, Express, and Body Parser** to build a psuedo dating site survey to match potential "friends" based on their answers.

The user data is not persistent, as each user is actually stored in /app/data/friends.js as a part of a JSON array. It is pre-seeded with some sample users, and each additional completion of the survey adds a new user to the list that can be matched.

Each input the user provides is stored as a javascript object that is pushed into the friends array. This was all pretty simple. The challenge was to run each survey answer provided by the new user against the corresponding answers of all of the other users. I wrote a reuseable function for doing this, and it works great! 

*This project pushed me to perservere and break a complex task into manageable steps. I also learned about deploying to Heroku, which has served me since.*
