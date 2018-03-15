Post.create(title:"RESTful Thinking", content: "REST is a convention of naming routes in a web application that is resource focused. If you are new to web development, or programming in general, this statement may seem a little obtuse. What this means is that a URL written using REST conventions is focused on the noun, or the resource, in the same way that object oriented programming is focused on treating all data (even functions!) as objects, or nouns in this metaphor. REST conventions are not the only way to write web application routes, but they are some of the most common.

So what does all this mean for the web developer and her trusty controller? What would a RESTful URL look like to access a specific blog post?

cutekitties.com/posts/7

A human looking at this URL can tell that we most likely want to do *something* with the post being accessed, but what exactly?

The other piece to this puzzle is the HTTP method being used in the application's controller. HTTP has 4 different methods:

* GET
* POST
* DELETE
* PUT

These methods represent the requests that a client's web browser can make to the server that is hosting the content of the web application. GET is a request from the client browser to the server to get the information from the server and show it on the client browser. POST represents a request from the client to send information to the server PC. DELETE requests send instructions from the client PC to the server to remove the specified resource. PUT (using Sinatra's MiddleWare, we see this as PATCH) is a request to update the specified resource with new content. DELETE and PUT are a little tricky since by default, web browsers only know how to make GET and POST requests. In the Sinatra framework, we get around this by including hidden forms associated with delete or edit buttons that tell the controller to interpret the following POST request as a PATCH or DELETE request instead.

Therefore, our blogger would need to write the following (simplified code) in her controller to make this route accessible:

```
GET '/posts/:id' do
    @post = Post.find(params[:id])
   erb :show
end
```

This code snippet tells the controller to catch any GET request with cutekitties.com/posts/id_number (for example cutekitties.com/posts/42) and introspect the request to find the id number of the post, then render the show post page with the post's content.")

Post.create(title: "Data Gem Project", content: "During the Learn.co curriculum, we have a series of final projects that put a bow on each collection of topics of study. The first project is a command line interface ruby gem that scrapes the web for data. Other than the requirement that we scrape content from the web, the guidelines are not very restrictive.

I find myself at a creative loss of words when I have no restrictions – I find it mentally stimulating to puzzle my way through requirements. My first project was something lurking around in the back of my mind  since I began the course in August.  I eventually turned to the concept of something related to Magic: The Gathering after a conversation with my romantic partner. She suggested I build something related to one of my favourite hobbies.

Magic: The Gathering is a fantasy collectable card game with over 17,000 unique published cards. Its first set of cards was published in 1993. A set is a selection of cards that are designed to be in the same play environment. There have been 84 sets released, with many more planned.

Magic: the Gathering has a thriving economic community based on buying and selling magic cards. Some cards can several thousand dollars, while others can be worth a few pennies. Each card has its own unique set of rules regarding how it can interact with other cards in the game.

Due to the wide range of cards and prices associated with each card, I thought it would be interesting and useful to build a gem that searches a catalogue of all published cards to display information such as rules text and average market price on individual cards.

My first hurdle I had to clear while designing this gem was choice of website to scrape. I originally planned on using TCGPlayer. I wrote all my tests for my scraper and card classes with this website in mind. To my dismay, the first time I used Nokogiri to scrape data from TCGPlayer I got an HTML document with the class boldy declaring “NO-ROBOTS.”

Luckily, after some desperate googling, I found a comparable website, Scryfall.com,  that allowed me to search for Magic cards. All was not lost, I simply had to rewrite my rspec tests! I commiserated with a friend who went through a similar issue with his project. If I had one piece of advice to give to other students, please make sure you can scrape your website with Nokogiri before you move beyond the planning phase!

Once I found a website that worked, I found that programming the scraper class was very zen. Launch IRB, look on the page for the data you want, test your selector statements in IRB, mess around with RegEx expressions on Rubular, rinse and repeat.

Writing the card class which kept track of individual card attributes was a simple affair. I designed it to take in an array of hashes generated by my scraper, and  build a collection of cards with attributes that could be modified.

I had a great 'AHA!' moment while I was demoing my gem to a friend. Originally, my gem would scrape the search page, create an array of URLs and names that was passed to the other scraper method in the scraper class that would scrape each card profile page, and then pass that array of hashses to the card class. This worked decently enough with a small number of hits, but his search yielded 60 results - it took about 45 seconds to build the whole collection of cards, which was an awful user experience.

I optimized my app by making the scraper class only scrape the card profile page when the corresponding individual card is accessed through the CLI. This cut the initial load time down to a second or two. That was one heck of an optimization!

Another issue my app had was that it could only display a max of 60 cards in the list main, since the search index of Scryfall displays a max of 60 per page. To get around this limit, at the end of the the index scraper I had it recur itself if it detected a link to display more results. I have always viewed recursion as dark mysterious entity. Using it to solve a problem has made it less mysterious for me.

One other improvement I would like to make for this gem down the road is to have it use Scryfall's API, which is much more reliable than scraping data from a webpage. The trouble with scraping data from a webpage is that you are at the mercy of the website's creator. The way data is structured on the website is subject to change at any time, which can spell doom for an out of date scraper.

While my gem is by no means a groundbreaking way to find up to date prices and info about collectable cards, I really enjoyed designing my project from the ground up. It was a great way to learn about the design process.
")

Post.create(title: "Why Software Development", content: "If you are reading this post, you might be wondering why I decided to get into programming as a career. This is my story, which is much more introspective than my usual technical fare.

Ever since I was a small child, I have had an interest in computers. One of my oldest memories is installing the original X-Wing in DOS. I remember being absolutely fascinated with how the other space ships in the game decided where to fly and who to shoot! I was blown away when my dad told me it was a computer making all the decisions for the space ships, not other people!

This fascination with computers persisted as I grow up. I have memories of wistfully cracking open books on C and wishing I could understand them.  When I was 10, I created the most 90’s looking webpage ever. I was extremely proud of myself! (Sidenote: `<blink>` tags are really cool if you are 10). I moved on to creating pages in Dreamweaver, and thought I was just the cat’s pajamas. In High School, My experience with dream weaver and HTML landed me the sweet gig of Assistant Web Master in my local scout troop.

Going off to college, like most people, I wasn’t exactly sure what I wanted out of life. Being able to program as a career seemed impossible for someone like me, so I went with Psychology instead. I had my ‘come to Jesus’ moment during an Intro to Neuroscience class.

The professor was discussing how neurons work – they build up an electrical threshold until they reach a certain charge and fire an impulse.  As I heard this, I saw a startling similarity between how the brain works and how computers work at a basic level. A circuit is either on or off – 1 or 0. When this simple binary input coalesces, something beautiful emerges. I get a tingle running down my spine just thinking about it.In a rather round about fashion, I discovered my career path. I can’t (and don’t want!) to be a brain programmer, but I can certainly be a computer programmer.

Unfortunately, I was unable to switch majors into computer science because of how far I had gotten into my current major. Double majoring was out of question – I was running out of time and money. I took a few lower level computer science classes and tried to be happy with that.

When I graduated, I knew I wanted to work with computers. Since I have been helping out friends and family with computer issues for a long time, I reviewed the benchmarks for the CompTIA +A certification ( a hardware and software certificate for IT professionals) and passed both tests on the first try. I quickly got a job in the IT industry as a support analyst.

About a year after that, I needed to get an intensive surgery with a lengthy recovery time. I had to take time off work. During those months, to fight restlessness, I started teaching myself Ruby using some tutorials I found on the internet. I fell in love with the language, which also brought with it the understanding I needed to change up my career path a little bit. To live a happy life, I think one needs to be satisfied with their career path. I set my sights on becoming a software engineer, and started working hard towards that goal.

Once I was confidant in my dedication to this career evolution, I left my job and taught myself the ins and outs of web development. I now feel as though I have a strong enough grasp on both frontend and backend development to begin searching for jobs.

With that being said, if you are interesting in hiring a passionate developer, contact me via [Linkedin](https://www.linkedin.com/in/alexandra-c-wright/)!!
")