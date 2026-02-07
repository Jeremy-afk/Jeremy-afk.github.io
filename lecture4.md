---
layout: default
title: Home
---

# Lecture Homework 4: Final Project: Final Presentation

## Interaction concept
For a refresher on the interaction concept, you can check it out [**here**](./lecture2.html).

## Implementation
The implementation is detailed [**here**](./lab5.html).

## Challenges

### 1. Interaction Package

When trying to work with Meta's Interaction package we couldn't not find a way to make triggers work which would be a problem for our implementation. Since we had previous experience with Unity's XR Interaction package from [**lab 4**](./lab4) we decided it was safer to continue with it.

We had a problem with the ```XR Grab Interactable``` component. When interacted with the component changes the parenthood of an object which is a problem given that the car acts as a parents to the steering wheel and the speedstick. We had to extend the ```XR Base Interactable``` component to implement our logic. However we were not able to define a custom grab point so we had to rely on the geometric center of the meshes we were using.

Changing the interaction package also meant that the pre-existing implementation of coin collection was broken and we implemented our own (simplified) version of the system.

### 2. Physics

Currently our implementation modifies the transform of the car directly. It should instead use physics so it can interact with the world around it. We tried to create a very simple car with a box collider and two sphere colliders to act as the wheels. The idea was to limit the amount of contact points with the ground because using a box collider made the car jittery. However we could not control the speed of the car anymore, even with a lot of time put into it the car would just slide around and be very minimally affected by the speedstick movement.

Since we have limited time to implement the locomotion, we have decided to use a temporary fix using simple transforms. With more time, we would fix this with a raycast-based suspension system or Unity's WheelCollider.


### 3. Video Demonstration
<video width="500" height="240" controls>
  <source src="Images\Lab5\Video Demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Evaluation
The survey results may be found [here](./lecture3.html).

The participants reported low motion sickness and high virtual presence. However, some participants reported difficulty operating the car and took some getting used to. Enjoyment and handling were mixed but overall not bad. 

The main issue came from the fact that handling was mainly done by rotating the joystick whereas you would expect to do larger motions to actually handle a car. Also the fact that both objects did not have an "anchor point" and had to be grabbed by the middle added to the difficulty.

# [Return to Home](./index.html) 