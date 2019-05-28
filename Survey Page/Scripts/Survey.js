function WriteToFile(passForm){
  alert("submitted")
  set fso = CreateObject("Scripting.FileSystemObject");
  set s = fso.CreateTextFile("filename.txt", True);
  var firstName = document.getElementById('First Name')
  var lastName = document.getElementById('Last Name')
  s.writeline("First Name:" + firstName);
  s.writeline("Last Name: ") + lastName);
  s.close();
}
