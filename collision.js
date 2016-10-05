#pragma strict

var Player:GameObject;
var raycastDist:float = 2.0;
@HideInInspector
public var lastPosition: Vector3;

function Start () 
{

}

function FixedUpdate() {
	var up: Vector3 = transform.TransformDirection(Vector3.up);
	Debug.DrawRay(transform.position, transform.up, Color.green);
	if (Physics.Raycast(transform.position, up, 10))
		print("There is something in front of the object!");
}
function Update () 
{
/*


	var hit : RaycastHit;
	Debug.DrawRay(transform.position, transform.forward, Color.green);

	 if(Input.GetKeyDown("c"))
     {
         if(Physics.Raycast(transform.position, transform.forward, hit, raycastDist))
         {
             if(hit.collider.gameObject.tag == "player")
             {
                 Debug.Log("hit player detected");
             }
             
         }
         else
         {
             Debug.Log("no hit player detected");
         }
 
     

     }
     */
	var lastPosition = Player.transform.position;	
}


function OnTriggerEnter(other: Collider)
{
	Debug.Log("Something is on me!");
	var distance : Vector3 = Player.transform.position - lastPosition;
	var velocity = distance / Time.deltaTime;
	velocity/0.2;
}

function OnTriggerExit(other: Collider)
{
	Debug.Log("Ah, its chill, its gone now");
	var distance : Vector3 = Player.transform.position - lastPosition;
	var velocity = distance / Time.deltaTime;
	velocity/0.2;
}