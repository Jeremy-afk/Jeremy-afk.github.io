---
layout: default
title: Home
---
# Lecture Homework 3: Locomotion Presentation
The slides for the presentation can be found [here](https://docs.google.com/presentation/d/1Kme5oimut_yWd0Myokfca8hzgemqivB1G30OxfgxzI0/edit?usp=sharing)

## Idea 1:

## Idea 2:

## Idea 3: Hand-Over-Hand movement
**Goals and Implementation**: The player pulls themselves around by grabbing virtual surfaces (ladders, walls,...). The objective is to mimic real life climbing. This locomotion system works with the player reaching for virtual “hold point” like a ladder bar or a rock. Once reached the character moves closer to where they grabbed. This movement method could be further refined to use an energy system to mimic fatigue.

**Evaluation**: We should compare this locomotion technique with others that make sense for our use case. Like teleportation, joystick locomotion. Even within our own technique we could compare different implementations. For instance: does the player automatically move once they grab a new hold point or should they pull to move themselves ? There are other things to take into consideration: is climbing our only way to move around or is it blended with others ? Does it make sense to have several movement methods ? These are all questions that should be taken into consideration and evaluated. This could be measured with different performance indicators: we could check the success rate of a particular task with a given locomotion technique, check with the user which technique causes more motion sickness, and the accuracy of the player when reaching for a grip. Players with different arm lengths mightn’t have the same experience so how do we account for that ?

![Alt text](Images\Lecture3\TheClimb.jpg "The Climb")

*“The Climb” uses Hand-Over-Hand locomotion*

# [Return to Home](./index.html) 