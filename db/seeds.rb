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

Post.create(title: "How to Create a Twitterbot with Python in Six Simple Steps", content: "Twitter bots are one of the most interesting things to arise from the popularity of Twitter. A twitter bot is a twitter account that is controlled by a piece of software that interacts with the Twitter API to create posts and occasionally interact with other users. Check out [MarkovaleRadio](https://twitter.com/MarkovaleRadio) for a prime example.

Twitter bots can [make us laugh](https://twitter.com/big_ben_clock), provide up to date details on what movies are [available on Netflix](https://twitter.com/netflix_bot), and even generate [strangely beautiful art](https://twitter.com/pixelsorter). This post will show you how to create and deploy a twitter bot in under an hour that uses markov chains to generate amusing Shakespearian tweets. This tutorial is written with Linux and MacOS users in mind!

#### Step One: Sign up for a new Twitter Account
Visit this [link](https://twitter.com/new_account?lang=en) and sign up for a new account. Make sure to provide your phone number - twitter will not let you use an application token without a confirmed phone number. Don't worry if you already have the number linked to a twitter account already, you can have multiple accounts linked to the same phone number.

#### Step Two: Create a new Twitter Application
Go to the [Twitter application page](https://apps.twitter.com/) and create a new application. On the Keys and Tokens tab, copy the application consumer key and consumer secret. Think of this as the username and password to your application.

 Scroll down, and also generate an access token for your account. This will allow the application you just created to use your account, including making posts with it! Remember, don't let anyone see either your consumer key/secret or your access token/secrets!

<iframe src='https://giphy.com/embed/3oFyCYNrra8qo1Cv8Q' width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/oskouioskoui-lotr-gifscapade-3oFyCYNrra8qo1Cv8Q'>via GIPHY</a></p>

#### Step Three: Set up your twitter bot environment
If you don't have python installed, you can download (anaconda)[https://www.anaconda.com/download/] which makes installing Python a breeze on any OS. In the location of your choosing, make a new directory to hold your twitterbot files. If you are following along in a terminal, the command would be something along the lines of `mkdir twitterbot`.

Inside the twitterbot folder, it is time to make a few files:

```bash
touch .env
touch .gitignore
touch get_twitter_auth.py
touch create_tweet
touch scheduler
curl -O https://raw.githubusercontent.com/jcjohnson/torch-rnn/master/data/tiny-shakespeare.txt
```
We also need to make the create_tweet and scheduler files executable. Enter
```
chmod +x create_tweet
chmod +x scheduler
```
To do just that. This will make it possible to run the files using ./ instead of python!

The .env file will hold your application's secrets. We will use the .gitignore file to tell github to ignore the .env file. We don't want to push the env file up to github for the world to see with all its secrets! The last command downloads tiny-shakespeare.txt, which we will feed to markovify to produce amusing Shakespearian tweets!

The get_twitter_auth.py will handle authorizing our application using the Tweepy library, and create_tweet.py will use the Tweepy library to actually post to twitter. We are keeping the authorization separate from the tweet creation to adhere to DRY principles. If you want to expand the this program's functionality (such as harvesting tweets from twitter for your bot to use in its corpus) it will be a snap to import necessary function. Finally, scheduler.py will handle  the timing of creating the posts.

Time to install some python packages!

```bash
pip install tweepy
pip install schedule
pip install python-env
pip install markovify
```
As mentioned, tweepy is a twitter API wrapper. Schedule is a neat little package that lets you schedule python functions to run at designated times. Python-env gives us some syntactic sugar to import  our .env file. Markovify handles text generation using Markov Chains.

Markov Chains use statistics to predict the probability of the next word, based on the previous word. Essentially, it shuffles up words based on a provided corpus (a collection of training documents) and spits out mostly coherent sentences. (Subreddit Simulator)[https://www.reddit.com/r/SubredditSimulator/] is an excellent example of this!

Open the .gitignore file and add the following:
```
.env
```
This setting will make git ignore the .env file. This step is CRUCIAL if you want to deploy your application to github.

#### Step Four: Authorizing your Application

Open your .env file and add the following:
```json
ENV_KEY=<YOUR APPLICATION KEY HERE>
ENV_SECRET=<YOUR APPLICATION SECRET HERE>
TOKEN_KEY=<YOUR TOKEN KEY HERE>
TOKEN_SECRET=<YOUR TOKEN SECRET HERE>
```
In your get_twitter_auth.py, enter the following:
```python
import dotenv
import tweepy

def load_dot():
  dotenv.load()

def handleAuth():
  consumer_key = dotenv.get('ENV_KEY')
  consumer_secret = dotenv.get('ENV_SECRET')
  access_key = dotenv.get('TOKEN_KEY')
  access_secret = dotenv.get('TOKEN_SECRET')
  auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
  auth.set_access_token(access_key, access_secret)
  return tweepy.API(auth)

def authorizeApp():
  load_dot()
  return handleAuth()
```

To summarize, this file loads the .env files into memory, does the twitter authentication dance, and returns a tweepy API object that is used to interact with Twitter.

#### Step Five: Creating  a Tweet with Markovify and Tweepy

Open your create_tweet file and enter the following. Make sure to not skip the top part that looks commented out, as it will allow the file to become an executable file! It is also what allows us to get away without adding the .py extension. Omitting the .py extension is not mandatory, but it signifies the intention of running this program as an executable in the shell!

```python
#!/usr/bin/env python3
# encoding: utf-8
import sys
import markovify
import tweepy
from get_twitter_auth import authorizeApp

def open_file(filename):
  with open(filename) as f:
    text = f.read()
    return text

def create_chain(text):
  return markovify.Text(text)

def post_to_twitter(message, api):
  api.update_status(message)

def write_message(text_model, api):
  message = (text_model.make_short_sentence(140))
  print(message)
  post_to_twitter(message, api)


if __name__ == '__main__':
  if len(sys.argv) != 2:
    print('Incorrect number of arguments')
    exit(1)
  file = open_file(sys.argv[1])
  model = create_chain(file)
  api = authorizeApp()
  write_message(model, api)
```
Lets break this code down: We are creating a markov chain based on a text file that is provided via a command line argument. We then post a message to twitter based off the text generated by the markov chain via the Tweepy API. The bottom ```if __name__ == '__main__'``` condition is a python convention that allows the execution of the specified code block if the program has been ran from the command line. If you want to play around with the message generation, feel free to play around with the settings. Comment out line 22 and run `./create_tweet tiny-shakespeare.txt` to check out the messages you can generate without posting anything to Twitter. Don't forget to uncomment out the line when you are done.

#### Step Six: Scheduling your tweets

In scheduler, enter:

```python
#!/usr/bin/env python3
# encoding: utf-8
import os
import time
import schedule
import datetime
import random

COMMAND = r'./create_tweet 'tiny-shakespeare.txt''

def get_timestamp():
  current_dt = datetime.datetime.now()
  return current_dt.strftime('[%Y-%m-%d %H:%M:%S]: ')

def do_math():
  die = random.randint(1,10)
  return die % 3 == 0

def run_command():
  if do_math():
    status = os.system(COMMAND)
  else:
    status = 'Math failed..'
  return status

def job():
  with open('status_log.txt', 'a+') as log:
    log.write(get_timestamp() + 'Initiating command\n')
    status = run_command()
    log.write('-'*100)
    log.write('\n')
    log.write('Command status = %s.\n' % status)

if __name__=='__main__':
  schedule.every(3).hours.do(job)
  with open('status_log.txt', 'a+') as log:
    log.write(get_timestamp() + 'Tweet scheduler started\n')
  while True:
      schedule.run_pending()
      time.sleep(1)
```
This file will schedule a task to run a shell command that will call your create_tweet program with the tiny-shakespeare.txt corpus. Feel free to substitute in any corpus your heart desires! It will also generate a log file with a nicely formatted time stamp whenever the scheduler is started, or it runs the job. The do_math function ensures that your twitter bot posts semi-unpredictably - It seems a little more exciting than posting every day at 2 PM. Feel free to mess around with the scheduling, but keep in mind you don't want to spam twitter, otherwise you will get your bot banned!

Finally, to properly use your twitter bot you will want to run the following command in your shell in the root directory of your project.
```
nohup ./scheduler &
```
The nohup command will tell whatever program was just executed to ignore the terminal shell closing, and keep on trucking! Please keep in mind, you will need to run this command every time your computer reboots. Push your project up to github, and rejoice!

The source code for my MarkovaleRadio bot is available on [GitHub](https://github.com/f3mshep/machine-tweeting)
#### Bonus Points
___

If you have access to a Virtual Private Server, or don't mind setting up a DigitalOcean account ($5 a month!) you can deploy your twitter bot to a server so that it is always running, even when your computer isn't on! Having access to a VPS allows you to do many awesome things such as host cool blog sites *cough*, run applications, do machine learning, host twitterbots... The possibilities are limited to whatever you can think up! If you are interested in DigitalOcean, stay tuned for my next post which will wax poetic about DO.

We will be using systemd to create a service that runs if you computer is on. Systemd is installed on all versions of ubuntu 15.04 and beyond. You should be able to install it on other versions of ubuntu, or use Upstart instead.

 SSH into your VPS, and clone the twitter bot project into your home directory.  Enter the following
`sudo nano /lib/systemd/system/twitterbot.service`
which will create a new systemd service and open it in nano. Enter the following:

```
[Unit]
Description=Python script to generate tweets
After=multi-user.target

[Service]
Type=idle
User=<YOUR USERNAME HERE>
Group=<YOUR USERNAME HERE>
WorkingDirectory=/home/<YOUR USERNAME>/<YOUR PROJECT FOLDER>
ExecStart=/home/<YOUR USERNAME>/<YOUR PROJECT FOLDER>/scheduler

[Install]
WantedBy=multi-user.target

```
Hit ctrl-x to exit the file, and then hit 'y' to save the file. Now, lets enable the service:
```
sudo systemctl enable twitterbot.service
sudo systemctl start twitterbot.service
sudo systemctl status twitterbot.service
```
Make sure the status checks out. If it doesn't, make sure all your path settings are correct, and that your user has root privileges. Also make sure to check the contents of your logfile in the project directory to verify the scheduler was properly started.

Congrats! You have an autonomous twitter bot up and running!

")