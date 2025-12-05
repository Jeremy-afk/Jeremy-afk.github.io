---
layout: default
title: Home
---
# Lab Homework 1: Blog Set Up

Our website began as a humble attempt to get a functional page online.

![Alt text](Images\Lab1\simpletemplate.png "Lab 2 version 1..")
*Simple, but it works...*

The next step was to add a little makeup to our creation. So we browsed the GitHub Pages themes and decided to use [**merlot**](https://github.com/pages-themes/merlot). 

![Alt text](Images\Lab1\merlottemplate.png "Merlot template")
*MerLot*

To apply the theme, we modified our _config.yml and added:
``` 
remote_theme: pages-themes/merlot@v0.2.0
plugins:
- jekyll-remote-theme 
```
*But the theme didn't show up.*

To fix this, we had to place our website’s content into index.md so the layout could be applied correctly.
After the change, we proudly present to you:

<div style="max-width:900px;">
	<video controls style="width:100%; height:auto;" preload="metadata">
		<source src="Images/Lab1/websitev2.mp4" type="video/mp4">
		Your browser does not support the video tag. You can download the video <a href="Images/Lab1/websitev2.mp4">here</a>.
	</video>
</div>

*Working but not perfect...*

Things were starting to look messy, so we added separate tabs for each lab.
And on each tab, we added a:

![Alt text](Images\Lab1\home.png "Home")
*GO HOME!*

This button lets users return to the homepage, very user-friendly!

# [Return to Home](./index.html) 