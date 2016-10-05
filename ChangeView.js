var cam1: Camera;
var cam2: Camera;
var yourButton: UI.Button;
function Start () 
{
	cam1.enabled = true;
	cam2.enabled = false;
	var btn:UI.Button = yourButton.GetComponent.<UI.Button>();
	btn.onClick.AddListener(TaskOnClick);
}

function Update () 
{
	if(Input.GetKeyDown(KeyCode.C))
	{
		changeView();
	}
}

function OnGUI() 
{
	if(GUI.Button(Rect(10,70,50,30), "Click Me"))
	{
		changeView();
	}
}
function changeView()
{
		cam1.enabled = !cam1.enabled;
		cam2.enabled = !cam2.enabled;
}
function TaskOnClick()
{
	cam1.enabled = !cam1.enabled;
	cam2.enabled = !cam2.enabled;
}