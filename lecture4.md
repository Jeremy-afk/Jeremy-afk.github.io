---
layout: default
title: Home
---

# Lecture Homework 4: Final Project: Final Presentation

## Concept
We take inspiration from the game _Mario Kart_ and the VR escape game _I Expect You To Die_.

_Mario Kart_ is a long-running arcade-style kart racing franchise developed by Nintendo. Players race as characters from the Mario universe on imaginative tracks while using power-up items (e.g., shells, bananas, lightning) to gain advantages or disrupt opponents. 

We were inspired from the "driving" component from Mario Kart because it would introduce less motion sick and would allow user to move around in an intuitive way.


![Alt text](Images\Lecture2\mario.jpg "Mario Kart")

_I Expect You To Die_ is a VR escape-room puzzle series developed by Schell Games. You play as a secret agent trapped in deadly scenarios (booby-trapped cars, submarines, laboratories) and must solve puzzles to survive. 

Since _I Expect You To Die_ is a VR game, it gave us a good guideline for increasing virtual presence. It inspired us to introduce multiple elements that embody different locomotion we want the users to explore.

![Alt text](Images\Lecture2\to-die.jpg "I expect you to die")

Our implementations mainly include three parts:
1. Steering Wheel: Steering Control
2. Speed Stick: Forward / Backward
3. Elevation: Jump button where the horn is. Due to technical difficulty, we prototyped this part with buttons on the joysticks.

**Steering Wheel and Lever**


![Alt text](Images\Lab5\Lever_and_wheel.png "Controls")

## Implementation
Here is the hierarchy of controls:

- Car (Box Collider)
  - XR Origin (Camera / Controllers)
  - Steering Wheel (RB + Collider)
  - Speedstick Pivot
    - Speedstick (RB + Collider)
- Canvas

**Hierarchy**


![Alt text](Images\Lab5\Hierarchy.png "Hierarchy")

The project is structured around a parent Car GameObject, which contains the primary interaction and locomotion components for the VR driving experience. The Car object includes a Box Collider that defines the physical boundary of the vehicle within the Unity physics system.

Nested within the Car is the XR Origin, which manages the VR camera and controller tracking. This component anchors the player’s viewpoint and hand interactions to the vehicle, ensuring that head and controller movements remain spatially consistent with the car’s position.

The interactive driving controls are implemented as follows:

Steering Wheel: Equipped with a Rigidbody (RB) and Collider, enabling physics-based rotational interaction. The player can grab and rotate the wheel to control steering input.

Speedstick Pivot: Acts as the rotational anchor point for throttle control.

Speedstick: Also configured with a Rigidbody and Collider, allowing the player to physically manipulate it to adjust acceleration.

## Challenges

### 1. Interaction Package: Meta XR Interaction SDK vs Unity XR Toolkit

During development, we encountered limitations with Unity’s default **XR Grab Interactable** component. By default, the grab system transfers transform control to the interaction framework, effectively overriding the object’s original parent-child relationship. This created structural issues in our hierarchy and reduced fine-grained control over how objects behaved while being manipulated. To address this, we had to extend and override **XRBaseInteractable** to implement custom interaction logic. Additionally, the default grab behavior anchors interaction at the object’s center point. While acceptable for free objects, this proved problematic for constrained elements such as levers, where interaction should occur around a fixed pivot rather than the geometric center.

Since the original evaluation is based upon the MetaXR Interaction SDK, we had to redo the framework and use a simple coin collection script and timed each round manually.

### 2. Physics

When using a single Box Collider, climbing a hill becomes unstable because the contact between the vehicle and the slope is too simplistic and physically unrealistic. Instead of distributed contact like real wheels, the box often touches the slope at an edge or corner, which creates large torque impulses when Unity resolves collisions. Since physics updates occur in discrete timesteps, small penetrations into the slope generate corrective forces that cause jitter or unwanted rotation. Additionally, friction is applied uniformly across the collider rather than modeling rolling traction, so the car may either slide backward or stick unnaturally. As a result, uphill movement feels unstable and difficult to control.

Since we have limited time to implement the locomotion, we have decided to use a temporary fix using simple transforms. With more time, we would fix this with a raycast-based suspension system or Unity's WheelCollider.


### 3. Video Demonstration
<div style="max-width:900px;">
	<video controls style="width:100%; height:auto;" preload="metadata">
		<source src="Images/Lab5/Video Demo.mp4" type="video/mp4">
		Your browser does not support the video tag. You can download the video <a href="Images/Lab5/Video Demo.mp4">here</a>.
	</video>
</div>

## Evaluation
The detailed statistics for the user test can be found [here](./lecture3.html).


The participants reported very low motion sick and high virtual presence. However, some participants reported difficulty in operating especially in the first round. That is partially due to the broken mechanism that we have right now. We expect the participants to feel more at ease operating the vehicle after the collision detection is implemented.


Additionally, one participants complained about the position of the lever being inconvenient to hold. She felt fatigued after three rounds because she couldn't stretch her right arm. This shall be improved with more time as well.

# [Return to Home](./index.html) 