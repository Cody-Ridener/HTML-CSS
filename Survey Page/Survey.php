

<?php
function writeInfoToFile($first, $last){
$s = "Name: ".$first." ".$last."\n";
$fp = fopen($first.".txt", 'w');
fwrite($fp,$s);
fclose($fp);
}
writeInfoToFile("Cody", "Ridener");
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    Thank you for your submission.
  </body>
</html>
