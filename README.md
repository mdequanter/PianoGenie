Piano Genie
==============

Piano Genie: An Intelligent Musical Interface
Piano Genie is in some ways reminiscent of video games such as Rock Band and Guitar Hero that are accessible to novice musicians, with the crucial difference that users can freely improvise on Piano Genie rather than re-enacting songs from a fixed repertoire. You can try it out yourself via our interactive web demo!

Rerefernce :  https://magenta.tensorflow.org/pianogenie

I created  a little piano 15 x 15 cm with 8 build-in fully functional keys and 2 sustaining feeds (one for sustaining and one for reset).  Inside you find an arduinu uno with cabling.

![20211126_233315](https://user-images.githubusercontent.com/74420584/143864470-9432c38c-83ac-40ac-b75c-7bd80e60490b.jpg)


Piano Genie is running in a NodeJs module.  So make sure you install NodeJs first (https://nodejs.org/en/download/)


Installation of this version of Piano Genie:


First upload Firmata to you Arduino Uno board,  If you want to know more, follow this tutorial (https://wiki.seeedstudio.com/ODYSSEY-X86J4105-Firmata/)

Then install the NodeJs Piano Genie module :

>>>> git clone https://github.com/mdequanter/PianoGenie
>>>> cd raspiPianoGenie
>>>> npm install

This will install the required modules like "Johhny-five for Arduino,  Express for webserver en some extra modules"

Starting  :

node index.js

Then open your browser, the site will be launched on port 5000, so :

http://localhost:5000

![Capture](https://user-images.githubusercontent.com/74420584/143866038-cb0e37bd-ed7a-4a2f-85df-6a1f6ba3d59e.PNG)



https://user-images.githubusercontent.com/74420584/143873532-421d2b7a-ae7d-40f7-9262-7abece49a9ef.mp4

