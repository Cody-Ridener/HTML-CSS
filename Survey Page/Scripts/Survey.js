function WriteToFile(){
  let fso = CreateObject("Scripting.FileSystemObject");
  let s = fso.CreateTextFile("filename.txt", True);
  var firstName = document.getElementById('firstname')
  var lastName = document.getElementById('lastname')
  s.writeline("First Name: " + "Cody");
  s.writeline("Last Name:  " + "Ridener");
  s.close();
}
