---
layout: default
title: Home
---
# Lab Homework 3: Roll-A-Ball
## 1- A quick tutorial
As the little project that was done for lab2 is eerly similar to this project, we'll rapid fire through the tutorial part of the lab to get to the fun part (the IP Paris flavour).

After going through the first seven parts of the tutorial, we land with a very similar game to our red coin collection mini-game.

<video width="640" height="360" controls>
  <source src="Images\Lab3\Part7.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*We had a better endscreen*

Luckily part 8 is where it gets interesting. We add two extra elements: an AI agent that follows the player around and movable boxes.

### 1.1 AI Agent
For the AI agent to work properly we need a way for it to navigate around. A naive way would be to have the enemy b-line towards the player but if we add a wall between the player and the enemy it's just going to get stuck. Luckily Unity got us covered with NavMesh. It works in two parts:
* First we need to set the ground as a NavMesh Surface: it tells the AI agent where it can and cannot go. 
* Second we create an enemy with a NavMesh agent, it allows us to customise the properties of our enemies (for instance how fast it walks). We also create a script to tell the agent who's their target as shown below.

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
To create a movable box we don't need to use any code. We add a couple of compenents to a box mainly: a Rigidbody with reduced weight so that we can toss the box around & a Nav Mesh Obstacle to make sure that our AI agents properly see the boxes and don't get stuck trying to get passed it.

![Alt text](Images\Lab3\BoxInspector.png "")

*Inspector of the box*

Something to note is that the way the tutorial tells us to handle the "death" of our player (by deleting the game object when the enemy collides) causes a crash with camera so we just add a condition to make sure everything works.

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

Before we dive in the level design we'll create a simple title screen/level selection menu. The player will be able to chose which level they want to enter or quit the game. This allows us to tackle something we didn't talk about in the first blog: the scene list. Our title and each of our levels will be a scene of their own. We need to add all of them to our Scene list within our build profile so that when we want to change scene can call the ```LoadScene()``` method. It takes the sceneID as it's input.

``` c#
  SceneManager.LoadScene(sceneID);
```

![Alt text](Images\Lab3\SceneList.png "")
*The SceneID is the number on the right*

We can call this method when the player clicks a button to change the level their in our bring them back to the main menu.

For the level design we'll employ a three step method:
* In the first level we introduce the main mecanics: moving around, collecting pickups and moving boxes.
* In the second level we introduce the enemy.
* In the third level everything comes together in a grand finale.

The level design process in itself is just moving our prefabs around to create interesting levels so nothing new under the sun. I could show you the end result but it's much better if you experience it yourself. Play the game in your browser by clicking [here](https://pumpkin-moon-studio.itch.io/my-rollin-ball)



# [Return to Home](./index.html) 