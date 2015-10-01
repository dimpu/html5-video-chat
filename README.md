# html5-video-chat
A simple html5 web-rtc peer to peer video chat.

![webttc-wiki](https://upload.wikimedia.org/wikipedia/en/2/24/WebRTC_logo.jpg)

## What is WEB-RTC?
According to wikipedia

> WebRTC (Web Real-Time Communication) is an API definition drafted by the World Wide Web Consortium (W3C) that supports browser-to-browser applications for voice calling, video chat, and P2P file sharing without the need of either internal or external plugins

## So what we did here?

We tried to implement a simple peer to peer video chat with out any back end. We used only javascript code with HTML5 apis to implement this.

## How to install it.
Make sure you have node.js or io.js installed in you system.

Clone this repo.

``bash
git clone https://github.com/dimpu/html5-video-chat.git
``

install following node modules globally.

``bash
npm i -g browserify
``

``bash
npm i -g budo
``

finally run ``bash npm i`` form your cloned directory.

## How to run it?

Very simple just run the command

``bash
npm start
``

It will create a node server to run in your local host.

If you want to build it you can do it by

``bash
npm run build
``

## How to use it
Give access permission for you webcam.
![](http://i.imgur.com/nlZsp8X.png)
Click on Initialize if you want to initiate your chat.
Wait for a while so that it will generate a key for you. (Please note some times it may take long for me it took 2 min once)

Then you should see a json string in your My Id text box.
![](http://i.imgur.com/rBN3Zoy.png)

Copy that string and give it to your fried ask him to open the same link in his/her browerser(make sure there is no #init in his brower)

Ask him to past the json string in OterId box and click on connect
![](http://i.imgur.com/PpS6H4n.png)
Now it should generate a MYId in his browser ask him to give it to you and past it in your chat windos OtherId textbox.

done!

Now you can Enjoy free video chat with your friend.



## TODO
- [ ]  Apply BS3 styles.
- [ ]  Simplify the user interaction.
