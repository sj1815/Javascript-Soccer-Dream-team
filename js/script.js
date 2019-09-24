var menuEle, dataVal, newMenu, newMenuQuestions,varOption,varSelect,iterator ,displayDiv, varTurf, playerDiv, finalDiv;
var varLocalStorage;
var totalOptions = new Array();
  
  function createMenu( dom ){
    var uagent = navigator.userAgent.toLowerCase();
      if(/safari/.test(uagent) && !/chrome/.test(uagent)){         // Redirect to from safari
        window.location.href = "elsewhere.html"
      }
    removeAll( "heading" );
    if( typeof( dom ) == "string" ){
    
      var dataVal = listOptions[dom];
      //console.log( dataVal );
      var head = document.createElement( "h1" );
  
      var headText = document.createTextNode("Dream Team Futsal");
      head.appendChild( headText );
      document.getElementsByTagName( "body" )[0].appendChild( head );
    }else{
      var dataVal = listOptions[dom.value];                                          // change and remove elements when the values change
      while (!(dom.nextSibling === null || dom.nextSibling === undefined)) {
        dom.parentNode.removeChild(dom.nextSibling);
        if (document.contains(document.getElementById( "finalMenu" ))) {
          document.getElementById( "finalMenu" ).remove();
        }
      }
    }
  
    
    //console.log(dataVal.treeNode);
   
    var treeNode = parseInt( dataVal.treeNode );
    //console.log(dataVal.treeNode);
   
    if ( dataVal.value.length !== 0 ){
      var dropDown = document.getElementById( "selectMenu" );
      //document.getElementsByName("div").style.display == "";
      //dropDown.style.display = dropDown.style.display ===  "none" ? "block" : "  ";
      newMenu = document.createElement( "p" );      // create p tag for first selection
      //console.log(dataVal);
      newMenuQuestions = document.createTextNode( dataVal.step );   // get question from datalist
      newMenu.appendChild(newMenuQuestions);    //append p tag with new Questions
      dropDown.appendChild( newMenu );  
      menuEle = document.createElement("select");     // create first dropdown
      menuEle.setAttribute( "name",dom.value );
      menuEle.setAttribute( "id", "autoDropDown" );       
      varOption = document.createElement( "option" );   
      varSelect = document.createTextNode( "select" );
      varOption.appendChild(varSelect);
      menuEle.appendChild(varOption);
      //console.log(menuEle);
      //console.log(dataVal.treeNode.length);
      for  (iterator = 0 , tnLength = dataVal.value.length; iterator < tnLength ; iterator++){
        //console.log(dataVal.value.length);
        varOption = document.createElement( "option" );           // iteration for multiple options
        varOption.setAttribute( "value", dataVal.value[iterator]);
        varSelect = document.createTextNode(dataVal.value[iterator]);
        varOption.appendChild(varSelect);
        menuEle.appendChild(varOption);
        

      }
      dropDown.appendChild(menuEle);
      var breakPoint = document.createElement( "br" );
      dropDown.appendChild(breakPoint);
      document.getElementsByTagName("body")[0].appendChild(dropDown);  // apend child at every new dropdown
      console.log(dom.value);
      totalOptions[treeNode] = dom.value;
      console.log(totalOptions);
      showPlayers(totalOptions[treeNode],treeNode,dataVal);
      
    } 
  else {
      //console.log(dom.value);
      totalOptions.push(dom.value);
      //document.getElementById( "selectMenu" ).style.display = "block";
      //console.log(totalOptions); 
      createFinalMenu(totalOptions);    // create final 
    
    
    }
  menuEle.setAttribute( "onchange", "createMenu( this )" );
  }
  
  function removeAll(id) {
    var node = document.getElementById(id);
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  //document.getElementById( "selectMenu" ).style.display = "none";
  }
  
  function createTurf(){
    var varTurf = document.createElement( "div" );
    varTurf.setAttribute( "id", "turfPicture");
    varTurf.style.backgroundImage= "url('../media/turf.png')";
    varTurf.style.width = "640px";
    varTurf.style.height = "599px";
//    varTurf.style.backgroundPosition = "center";
//    varTurf.style.backgroundAttachment = "fixed";
//    varTurf.style.backgroundRepeat = "noRepeat";
    varTurf.style.backgroundSize = "cover";
    document.getElementById( "turfImage" ).appendChild(varTurf);
    //console.log(menuEle);
    
  }

  function showPlayers( playerDiv, treeNode, dataVal ){
    var playerCheck2 = parseInt( treeNode );
    console.log(playerCheck2);
    if( ( playerDiv != null ) && ( treeNode == 1 ) ){
      //var eleCheck = document.getElementById("1");
      ///console.log(eleCheck);
      if( document.getElementById( "i1" )){
        var varRem = document.getElementById( "i1" );
        varRem.parentNode.removeChild( varRem );
      }
      var miniDiv = document.createElement( "div" );
      miniDiv.setAttribute( "id", "i" + treeNode );
      document.getElementById( "turfPicture" ).appendChild( miniDiv );
      var miniImg = document.createElement ( "img" );
      miniImg.setAttribute( "src", dataVal.badge );   
      miniImg.style.width = "140px";
      miniImg.style.height = "140px";
      miniImg.style.display = "block"; 
      document.getElementById( "i" + treeNode ).appendChild(miniImg); 
    }
    else if( (playerDiv != null) && ( treeNode > 1 ) ){
      var playerCheck1 = parseInt( treeNode );
      console.log(playerCheck1);
      //console.log(playerCheck);
      //var eleCheck2 = document.getElementById( treeNode );
      //console.log(eleCheck2);
      
      if( playerCheck1 > playerCheck2 ){
        var n = "i" + treeNode;
        console.log( n );
        var varRem2 = document.getElementById( n );
        console.log( varRem2 )
        varRem2.parentNode.removeChild( varRem2 ); 
      }
      
      var miniDiv2 = document.createElement( "div" );
      miniDiv2.setAttribute( "id", "i" + treeNode );
      miniDiv2.style.width = "200px";
      miniDiv2.style.width = "200px";
      miniDiv2.style.overflow = "hidden";
      document.getElementById( "turfPicture" ).parentElement.appendChild(miniDiv2);
      var varPlayer = document.createElement( "img" );
      varPlayer.setAttribute( "src", dataVal.displayPic );
      varPlayer.style.height = "100px";
      varPlayer.style.width = "140px"
      varPlayer.style.display = "block"; 
      document.getElementById( "i" + treeNode ).appendChild(varPlayer);
      var varCountry = document.createElement( "img" );
      varCountry.setAttribute( "src", dataVal.country );
      varCountry.style.height = "40px";
      varCountry.style.width = "140px";
      varCountry.style.display = "block"; 
      document.getElementById( "i" + treeNode ).appendChild(varCountry);
      var varStats = document.createElement( "img" );
      varStats.setAttribute( "src", dataVal.stats );
      varStats.style.height = "60px";
      varStats.style.width = "140px";
      varStats.style.display = "block"; 
      document.getElementById( "i" + treeNode ).appendChild(varStats);
    }
  }

  function createFinalMenu( totalOptions ){
    var finalDiv = document.createElement( "div" );
    finalDiv.style.height = "400px";
    finalDiv.style.width = "300px";
    finalDiv.setAttribute( "id", "finalMenu" );
    document.getElementsByTagName( "body" )[0].appendChild(finalDiv);
    console.log(totalOptions);
    var listDiv = document.createElement( "div" );
    listDiv.style.width = "200px";
    listDiv.setAttribute( "id", "populateList" );
    document.getElementById( "finalMenu" ).appendChild(listDiv);
    var finalList = document.createElement( "ul" );
    for (var item = 1; item < totalOptions.length; item++ ){
      var listItem = document.createElement( "li" );
      listItem.appendChild(document.createTextNode( totalOptions[item] ));
      finalList.appendChild(listItem);
    }
    document.getElementById( "populateList" ).appendChild(finalList);
    
    var varForm = document.createElement( "form" );
    varForm.setAttribute( "id", "submitForm" );
   
    var label1 = document.createElement( "label" );
    var firstName = document.createTextNode( "First Name: " );
    label1.appendChild(firstName);
    varForm.appendChild(label1);
    var text1 = document.createElement( "input" );
    text1.setAttribute( "type", "text");
    text1.setAttribute( "name", "fName" );
    text1.setAttribute( "id", "fName");
    varForm.appendChild(text1);
    varForm.appendChild(document.createElement( "br" ));
    varForm.appendChild(document.createElement( "br" ));
    varForm.appendChild(document.createElement( "br" ));
    
    var label2 = document.createElement( "label" );
    var lastName = document.createTextNode( "Last Name : " );
    label2.appendChild(lastName);
    varForm.appendChild(label2);
    var text2 = document.createElement( "input" );
    text2.setAttribute( "type", "text");
    text2.setAttribute( "name", "lName" );
    text2.setAttribute( "id", "lName");
    varForm.appendChild(text2);
    varForm.appendChild(document.createElement( "br" ));
    varForm.appendChild(document.createElement( "br" ));
    varForm.appendChild(document.createElement( "br" ));
    
    var submitButton = document.createElement( "input" );
    submitButton.setAttribute( "type","button" );
    submitButton.setAttribute( "value", "submit" );
    submitButton.setAttribute( "onclick", "validate()")
    varForm.appendChild(submitButton);
    document.getElementById( "finalMenu" ).appendChild(varForm);
    var nameAlerts = document.createElement( "p" );
    nameAlerts.setAttribute( "id" ,"fn" );
    document.getElementById( "finalMenu" ).appendChild(nameAlerts);
  }

  function validate(){
    var firstName = document.getElementById( "fName" ).value;
    var lastName = document.getElementById( "lName" ).value;
    
    console.log(firstName);
    console.log(lastName);
    if (!((firstName === "" || firstName === null) || (lastName === "" || lastName === null))){  // validation for form
      savedName = firstName + lastName;
      console.log(savedName);
      localStorage.setItem( "formValue" ,savedName);
   
    }
    else{
      textfn = document.createTextNode( "Please fill both the columns" );
      document.getElementById( "fn" ).parentNode.appendChild(textfn);
    }
  }
  
  function GetCookie(name) {
            var arg = name + "=";
            var alen = arg.length;
            var clen = document.cookie.length;
            var i = 0;
            while (i < clen) {
                var j = i + alen;
                if (document.cookie.substring(i, j) == arg) {
                    return getCookieVal(j);
                }
                i = document.cookie.indexOf(" ", i) + 1;
                if (i == 0) break;
            }
            return null;
        }

  

  
  

