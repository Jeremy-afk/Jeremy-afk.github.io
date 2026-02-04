---
layout: default
title: Home
---
# Lab Homework 3: Throw-A-Ball
The resulting application may seem small but we can not understate the time it took to debug everything. A lot of hair pulling sessions had to happen in order for this lab to come to fruition.

## 1- Headset setup
The first step was to setup the VR headset so that it is in "developper mode". The recipe is as follow:
* Download the Meta Horizon app on your phone.
* Make sure that you are connected to the same wifi network as the headset.
* Activate bluetooth and localisation.
* To get the phone to actually connect to the headset is still a bit mysterious. I've found sucess in activating "mirror mode"  which allows you to see what is happening in the headset. When deactivated you should be connected to the headset.
* You also need a Meta developper account, luckily it is not very hard to setup and you only needs to confirm an email address.
* You may now activate "developper mode" in your headset.

![Alt text](Images\Lab4\Meta_Horizon.jpg "The meta horizon app")
*The meta horizon app*

## 2- Unity setup
You need developper mode in order to send data from unity and to execute "unidentified apps" which are the builds of the project you are working on. The steps I took may not be the most effective ones but they were the result of trial and error.
* In the Unity Asset store get the following packages: Meta XR Simulator, Meta Interaction SDK and Meta XR Core SDK.
* Along with the previously mentionned packages, I imported the XR plugin management, XR interaction toolkit and XR hands.
* Switch the build profile to android and make sure to select the headset as the run device.
* In project settings make sure that the in Player/Minimum API level is high enough to be compatible with the packages you installed.
* In XR Plug-In Management select the OpenXR Plug-In Provider.
* You may now import the features you need.
* One part the I struggled with a lot is getting the controllers working. I found a sample project in the XR Interaction Toolkit package called "Hands Interaction Demo". There is a demo scene that shows a lot of different interactions and most importantly the controllers work. So I snatched prefabs and put them in my scene. 
![Alt text](Images\Lab4\Hands_Demo_Scene.png "Hands demo scene")
*Hands demo Scene*

## 3- Game creation
Since I was starting from a blank project, I wanted to try something new. I took inspiration from a traditionnal carnival game called "Chamboule-tout". You have knock down a pile of cans from a distance by throwing a ball.

The can is a simple cylinder game object with a rigidbody and a box collider. I setup the mass to be a little bit lighter than the ball so they can satisfyingly fly when they get hit.

To create the ball you can add a rigidbody to a sphere game object and add the XR Grab Interactable component. The component allows the ball the be grabbed and thrown. 

<video width="500" height="240" controls>
  <source src="Images\Lab4\Throw-a-ball.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

As the video shows, the ball can be grabbed by a great distance and thrown quite far. Because of this you can just move the ball around to knock the cans (which is cheating) but still very fun to do.

# [Return to Home](./index.html) 