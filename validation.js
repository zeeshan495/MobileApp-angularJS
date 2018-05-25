function emailValid()
{
  inputText=(document.getElementById('id').value);

  var mailformat = /\w+([\.-]\w+)*@\w+([\.-]\w+)*(\.\w{2,3})/;
if(inputText.match(mailformat))
{
  alert("You have entered an valid email address!");
  return true;
}
else
{
  alert("You have entered an invalid email address!");
  return false;
}
}
