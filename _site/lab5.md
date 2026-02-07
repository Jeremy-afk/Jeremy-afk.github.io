# Lab 5 : VR Locomotion technique Implementation
## Interaction concept
For a refresher on the interaction concept, you can check it out [**here**](./lecture2.html).
## Technical Implementation
![Alt text](Images\Lab5\Hierarchy.png "Car Hierarchy")

*Car Hierarchy*

Here is an explation of each child GameObject and its corresponding components:
* Car: is made of three components:
    * A very simple movement script that moves the car up/down when the right-hand primary/secondary buttons are pressed. This is used to control the height of our car because the locomotion implementation acts directly on the transform component, so otherwise we would phase through the hill. Moreover, it allows us to collect the coins at the end. We dropped the idea of an in-game jump button on the horn because driving already felt very hectic and took some getting used to, so adding an extra button would raise the skill floor too high.
    * A coin manager script recycled from [**Lab 1**](./lab1.html). Since we changed the camera/controller rig, it broke the existing implementation of the coin collection mechanic. We modified the coin GameObject to work with this script.
    * A box collider that allows collision between the coins and the car so they can be picked up.
* CameraAnchor: this GameObject is ultimately useless. The initial idea was to have a script that only allowed the camera to move but not rotate in order to reduce motion sickness. We then realized that when driving a car, you both translate and **rotate** with it.
* XR Origin comes from the Unity XR Interaction Toolkit package. We had more success using it than the Meta one, so we switched.
* Steering Wheel:
    * The mesh is a model made in Blender, because Unity does not provide a donut mesh by default, and a simple circular steering wheel did not look good.
    * A custom implementation of the ```XRBaseInteractable``` component, which by default allows the object to be grabbed. The local rotation around the Z axis is used as input for the car’s rotation around its Y axis (both in local coordinates).
    * It has a Rigidbody and a box collider to work with the ```XRBaseInteractable``` component. The Rigidbody was set to kinematic because physics did not need to be applied to the object.
* Speedstick pivot/Speedstick (which ended up being useless): the idea was for the lever to rotate around its base. However, when interacting with the object, you grab it by the middle, which causes it to rotate around its center. That is why the lever is placed higher than expected, so you do not have to reach down to grab the center instead of the tip. It functions very similarly to the steering wheel, but converts the rotation around the local X axis (between −45° and +45°) into forward/backward movement of the parent car.

![Alt text](Images\Lab5\lever_and_wheel.png "lever and wheel").

As you can see the lever is on the same level as the wheel.

* A canvas set to world space, because the camera rig works differently and does not recognize the typical screen-space overlay used to display how many coins the player has collected.

## Improvement ideas
* Model a proper mesh for the car to enhance immersion.
* Learn how to properly use the Meta Interaction SDK.
* Streamline the development process: we did not take the time to set up playtesting directly in the editor, so we had to build the project every time we wanted to test a change. This ended up costing us a significant amount of time. At some point, when testing physics, we exposed public variables that could be changed to test driving behavior, but it was not a great solution.
* Make a proper speedstick that functions the way you would expect.
* Use physics-based interaction instead of modifying transforms directly.
* Iterate on our implementation based on user feedback. <- *probably the most important*

## Final Words
You can find the project on GitHub [**here**](https://github.com/Jeremy-afk/VRParkour), and below is a video of our implementation in action (it has been sped up because the file was too large to upload to GitHub otherwise).

<video width="500" height="240" controls>
  <source src="Images\Lab5\Video Demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
