# Lab Homework 1: Blog Set Up


# Lab Homework 2: Unity Set Up
## 1- An Empty Project
After installing the latest version of Unity and creating a 3D project, we are greeted with… a vast emptiness. To fill this empty world, we need ideas. And the easiest way to get ideas is to steal them from someone else. Enter: **Mario 64 Red Coins challenges!**

![Alt text](Images\Lab2\Mario64_RedCoin.jpeg "A hidden coin in Jolly Roger Bay")
*Collect 8 red coins to earn a star !*

To recreate this experience, we need three essential components:
* A player
* Coins to collect
* Terrain to move around on.

For simplicity, the player will be represented by a capsule, the coins by deformed spheres, and the terrain by a flat plane. To make things a little bit more visually interesting, we’ll add materials to the objects: red for the coin (It's called a red coin challenge for a reason) and some green for the terrain.  

![Alt text](Images\Lab2\UnityScene_Populated.png "This is quite the level design")
*Tadaa! Our own little 8-coin challenge*

## 2-Creating Gameplay
Now that the playground is set, we need a way to actually play the game. For that, we need two core features: A way to move the player around and a way to interact with the coins. 

### 2.1- Character Controls
To simplify the camera controls we'll use a first-person view. To do this, we position the camera at eye level inside our capsule player and make it a child of the player GameObject. This way, whenever the player moves or rotates, the camera follows automatically.

Next we want our player to move. We start by adding a Rigidbody component to the player to allow for physics-based interactions. Then, we create a new C# script named `Player.cs`.

Since we are in a first-person perspective, we want the camera (and player) to rotate based on mouse movement. We retrieve the mouse’s X and Y movement using Unity’s input system and convert them into yaw (horizontal rotation of the player) and pitch (vertical rotation of the camera):
* Yaw: rotates the entire player body (and camera) around the Y-axis.
* Pitch: rotates only the camera around the X-axis. We clamp this value to prevent the player from breaking his own neck. 

Next we want our player to actually move. To do this we use Unity's built in input functions:
```c#
Input.GetAxisRaw("Horizontal");
Input.GetAxisRaw("Vertical");
```
They return the directionnal input directly from the keyboard (in our case WASD and arrow keys)
commands we can directly get the relevant player inputs. To control how fast and smoothly the player moves, we also define variables for speed, acceleration, and deceleration. Using these, we apply movement forces through the Rigidbody. Provided bellow is the main component of the movement code.

``` c#
void FixedUpdate()
{
    //Without this line the player would move in world space not in local space
    Vector3 moveDir = transform.TransformDirection(input);  

    Vector3 velocityChange = (moveDir * moveSpeed - rb.linearVelocity);

    // Accelerate or descelerate
    if (input.magnitude > 0.1f)
    {
        velocityChange = Vector3.ClampMagnitude(velocityChange, acceleration * Time.fixedDeltaTime);
    }
    else
    {
        velocityChange = Vector3.ClampMagnitude(velocityChange, deceleration * Time.fixedDeltaTime);
    }
    rb.linearVelocity += new Vector3(velocityChange.x, 0, velocityChange.z);
}
```

`FixedUpdate` is prefered to `Update` for physics based calculations. By default `FixedUpdate` runs at 50 times per second whereas `Update` is dependent on the end users machine and the number of frames per second may vary.

### 2.2- Coin Interaction
First we want our coin to look like a proper red coin, let's add some rotation.

<video width="320" height="180" controls>
  <source src="Images\Lab2\Coin.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*Much better*

Next, we want the coin to react when the player touches it. We'll treat the coin as a trigger meaning it won’t block the player, but it can detect when something enters its area. To do this: 
* We check the `is trigger` box in the Sphere Collider of the coin.
* We add a 'Coin' tag to the coins.
* User the `OnTriggerEnter()` method as shown bellow.

```c#
    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Coin"))
        {
            Debug.Log("Player picked up a coin!");
            Destroy(other.gameObject);
        }
    }
```

Our player can now move around and interact with coins. 
![Alt text](Images\Lab2\CoinsEaten.png "RIP to our fallen coinmarads")
*The core gameplay is completed but there is still more to do.*

## 3-Polishing
A game truly shines through its polished details. To make ours sparkle, we’ll add a few finishing touches.

First, let's add feedback when the player collects a coin. And what’s more iconic than the classic *ding!* sound? We simply need to play an audio clip in `OnTriggerEnter()`.

Next we want our player to know how far he is in his coin collecting journey, so we need UI. We create a canvas with a text element to display the number of collected coins. To keep track of our coins we'll use a little trick: we create an empty game object and we assigned the coins as children of this game object. It keeps the hierarchy tidy and allows us to access the amount of coins at all times by counting the number of children the game object has. We then create a Game Manager which will count the coins at the start of the game and then update each time a coin is collected. Now that we know how many coins we have collected out of the total we can just update the text element accordingly.

![Alt text](Images\Lab2\UI.png "Other fonts could have been used")
*Only 5 more to go !*

Finally when all coins are collected we want to congratulate the player and offer him the option to either replay the level or quit the game. To achieve this:
1. We add a pannel to our previously created canvas with a text element and two button elements (a Restart and Quit) 
2. Set the pannel as inactive by default
3. When all coins are collected we activate the pannel. 
4. To give behaviour to our buttons we can create relevant methods in our game manager and assign them to the button.

```c#
    public void RestartGame()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }

    public void QuitGame()
    {
        Application.Quit();
    }
```

Here is a table showcasing a couple of issues and how they were solved:
|  Issue | Solution  |
|---|---|
|  The Cursor is hidden/locked due to first-person view | Unlock and show cursor when UI appears  |   
|  The Player may move after victory | Set `Time.timeScale = 0` and reset to `1` upon restarting |   

![Alt text](Images\Lab2\Victory.png "Pro_Gamer.png")
*Our GOTY is officially complete !*