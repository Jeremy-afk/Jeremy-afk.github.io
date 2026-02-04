---
layout: default
title: Home
---
# Lecture Homework 1: Locomotion Presentation
The slides for the presentation can be found [here](https://docs.google.com/presentation/d/1Kme5oimut_yWd0Myokfca8hzgemqivB1G30OxfgxzI0/edit?usp=sharing)

## Idea 1:
**Goals and Implementation**: In the virtual world, we have a set of “paths” for magnetic gliding. The world is filled with invisible “magnetic rails.” When the user points their controller at a destination and presses a button, they snap onto the nearest rail and glide smoothly. The rail handles curves and acceleration automatically to avoid sickness. 

When the user pulls the trigger harder, the glide will be faster correspondingly. This locomotion aims for fast speed, low motion sickness.


**Evaluation**: Time to reach destinations, Motion sickness levels, User comfort/perceived control


**Inspiration**: It Takes Two
![Alt text](Images\Lecture1\two.jpg "It Takes Two")

*It Takes Two uses gliding in some scenes*

## Idea 2: Fairy flaps
**Goals and Implementation**: The user holds their controllers like delicate “fairy wings.” Tiny wrist flicks or light hand flaps cause gentle movement in the direction where the user is looking at.
Faster flaps suggests slightly stronger push. 
The system resembles a “fairy” experience, where you use your hand to control where you go like flapping wings. By holding the hands close together in front of the body, the user enters hover mode. And they look around while remaining stationary.


This locomotion should enable precise navigation and low motion sickness.


**Evaluation**: How precise the user can navigate to a certain point/object, motion-sickness level, how long the user can use VR without feeling fatigue


**Inspiration**: Split Fiction
![Alt text](Images\Lecture1\split-fiction.jpg "Split Fiction")

*Fairying in Split Fiction*


## Idea 3: Hand-Over-Hand movement
**Goals and Implementation**: The player pulls themselves around by grabbing virtual surfaces (ladders, walls,...). The objective is to mimic real life climbing. This locomotion system works with the player reaching for virtual “hold point” like a ladder bar or a rock. Once reached the character moves closer to where they grabbed. This movement method could be further refined to use an energy system to mimic fatigue.

**Evaluation**: We should compare this locomotion technique with others that make sense for our use case. Like teleportation, joystick locomotion. Even within our own technique we could compare different implementations. For instance: does the player automatically move once they grab a new hold point or should they pull to move themselves ? There are other things to take into consideration: is climbing our only way to move around or is it blended with others ? Does it make sense to have several movement methods ? These are all questions that should be taken into consideration and evaluated. This could be measured with different performance indicators: we could check the success rate of a particular task with a given locomotion technique, check with the user which technique causes more motion sickness, and the accuracy of the player when reaching for a grip. Players with different arm lengths mightn’t have the same experience so how do we account for that ?

![Alt text](Images\Lecture1\TheClimb.jpg "The Climb")

*“The Climb” uses Hand-Over-Hand locomotion*

# [Return to Home](./index.html) 