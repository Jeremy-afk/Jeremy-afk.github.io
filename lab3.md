---
layout: default
title: Home
---
# Lab Homework 3: Roll-A-Ball
## 1- A quick tutorial
Since the little project from Lab 2 is eerily similar to this one, we’ll rapid-fire through the tutorial section so we can get to the fun part (the IP Paris flavour).

After going through the first seven steps of the tutorial, we end up with a game very similar to our red coin-collection mini-game.

<video width="640" height="360" controls>
  <source src="Images\Lab3\Part7.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*We had a better end screen*

Thankfully, Part 8 is where things get interesting. We add two new elements:
an AI agent that follows the player, and movable boxes.

### 1.1 AI Agent
For the AI agent to behave correctly, it needs a way to navigate the environment.
A naïve method would be to make the enemy run directly toward the player, but if a wall stands between them, it will simply get stuck. Fortunately, Unity has us covered with NavMesh. It works in two steps:
* Set the ground as a NavMesh Surface: it tells the AI agent where it can and cannot go. 
* Create an enemy with a NavMesh agent, it allows us to customise the properties of our enemies (for instance how fast it walks). We also create a script to tell the agent who their target is:

```c#
public class EnemyMovement : MonoBehaviour
{
    [SerializeField] private Transform player;
    private NavMeshAgent navMeshAgent;

    void Start()
    {
        navMeshAgent = GetComponent<NavMeshAgent>();
    }

    void Update()
    {
        if (player != null)
        {
            navMeshAgent.SetDestination(player.position);
        }
    }
}
```
### 1.2 Movable Box
To create a movable box we don't need any code. We add a couple of components to a box: 
* A Rigidbody with reduced weight so that we can toss the box around
* A Nav Mesh Obstacle to make sure that our AI agents properly see the boxes and don’t get stuck trying to walk through it

![Alt text](Images\Lab3\BoxInspector.png "")

*Inspector of the box*

One thing to note: the tutorial’s method for handling the player’s "death" (destroying the player object on collision) causes the camera to break and crash the game.
We fixed this by adding a simple condition:

``` c#
    void LateUpdate() //Called after all other Update functions
    {
        if(player != null)
        {
            transform.position = player.transform.position + offset;
        }
    }
```

We end up of a prototype that looks like this:

<video width="700" height="300" controls>
  <source src="Images\Lab3\Parts8.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*That's some pro gaming right here*

## 2- The IP Paris flavour
We'll add a bit of level design to have something that feels like a real game. We will built 3 level of increasing difficulty where the objective is to collect all coins before moving on to the next level.

Before we dive in the level design we'll create a simple title screen/level selection menu. The player can chose which level to play or exit the game. This lets us talk about something we didn’t cover earlier: the Scene List. 

Each level (and the title screen) is its own scene. We must add all scenes to our build settings so we can switch between them with ```LoadScene()``` method, which takes a sceneID as input.

``` c#
  SceneManager.LoadScene(sceneID);
```

![Alt text](Images\Lab3\SceneList.png "")
*The SceneID is the number on the right*

We trigger this method when the player clicks a button, to enter a level, to return to the main menu of even restart the level if the sceneID is the current scene.

For the level design we'll employ a three step method:
* First level: Introduce the core mecanics: movement, collecting pickups and moving boxes.
* Second level: Add an enemy.
* Third level: everything comes together in a final challenge.

The level design process in itself is just moving our prefabs around to create interesting levels. I could show you the end result but it's much better if you experience it yourself. Play the game in your browser by clicking [here](https://pumpkin-moon-studio.itch.io/my-rollin-ball)

# [Return to Home](./index.html) 