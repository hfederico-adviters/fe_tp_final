import React from 'react'

const File = ({name, ...rest}) => {


  const loadFile = (event) => {
    var reader = new FileReader();
    if (rest){
      reader.onload = function(){
        var output = document.getElementById('output');
        output.src = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    
  };
  console.log(rest)
  return (
    
<>
    <input name={name} type="file" accept="image/*" onChange={(event) => loadFile(event)}/>
    <img id="output" src='' style={{width:"5rem"}}/>
 </>
  )
}

export default File