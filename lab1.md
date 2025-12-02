---
layout: default
title: Home
---
# Lab Homework 1: Blog Set Up

Our website started with a humble attempt to launch a working website. 
After the great magician Geremy created the blog post for Lab 2, we started sailing in the sea of updates of our website.

![Alt text](Images\Lab1\simpletemplate.png "Lab 2 version 1..")
*Simple but working...*

Next thing is to put a little bit of makeup on this little.. thing. So we browsed the github page themes, and decided to purchase the theme [**merlot**](https://github.com/pages-themes/merlot). 

![Alt text](Images\Lab1\merlottemplate.png "Merlot template")
*MerLot*

In order to do that, we modified the _config.yml and added
``` 
remote_theme: pages-themes/merlot@v0.2.0
plugins:
- jekyll-remote-theme 
```
*But the theme was not showing up.*

The great master of tomorrow ChatGDT delivered the solution. We need to put the content of the website in index.md to apply the layout. After the change, we present to you:

<div style="max-width:900px;">
	<video controls style="width:100%; height:auto;" preload="metadata">
		<source src="Images/Lab1/websitev2.mp4" type="video/mp4">
		Your browser does not support the video tag. You can download the video <a href="Images/Lab1/websitev2.mp4">here</a>.
	</video>
</div>

*Working but not perfect...*

We thought things were too messy, so we added separate tabs for each lab. And in each tab we added a 

![Alt text](Images\Lab1\home.png "Home")
*GO HOME!*

to enable user to return to home page. Very user friendly!

# [Return to Home](./index.html) 