class Model{
    constructor(){
         // all the pre and post existing data

          this.internalDivIds={
            "Name":["personName","personAbout","PersonSubDescription"],
            "Education":["educationDegree","educationCollege","educationDate","educationBranch"],
            "Work Experience":["workRoleName","workCompanyName","workDate","workPlace","workDescription"],
            "Skills":["skills"],
            "Personal Projects":["projectTitle","projectAbout"],
            "Languages":["lang","langExperiance"]
          };

         this.labelNumberOfItems={
            "Name":3,
            "Education":4,
            "Work Experience":5,
            "Skills":1,
            "Personal Projects":2,
            "Languages":2
          };

         this.data={
             "Name" : [
                {
                    "personName":"Praveen Chandel",
                    "personAbout":"Android App Developer and ex-Co- Founder and developer of Food For You",
                    "PersonSubDescription":"On the way of learning new technologies."
                }
            ],
            "Education" : [
                {
                    "id":"education0",
                    "educationDegree":"B. Tech",
                    "educationCollege":"National Institute of Technology, Jamshedpur",
                    "educationDate":"07/2018-Present",
                    "educationBranch":"- Computer Science and Engineering"
                },
                {
                    "id":"education1",
                    "educationDegree":"12th",
                    "educationCollege":"APEX, baran",
                    "educationDate":"05/2015-05/2017",
                    "educationBranch":""
                },
                {
                    "id":"education2",
                    "educationDegree":"10th",
                    "educationCollege":"MSBVN, bakani, Jhalawar",
                    "educationDate":"06/2007-05/2015",
                    "educationBranch":""
                }
            ],
            "Work Experience" : [
                {
                    "id":"workExperience0",
                    "workRoleName":"Ex- Co-Founder And Developer",
                    "workCompanyName":"Food For You",
                    "workDate":"11/2020 - 06/2021",
                    "workPlace":"Jodhpur, Rajasthan",
                    "workDescription":"Achievements/Tasks :-"
                },
                {
                    "id":"workExperience1",
                    "workRoleName":"Software Developer Engineer",
                    "workCompanyName":"YourFirstAd",
                    "workDate":"06/2021 - 07/2021",
                    "workPlace":"Remote, work from home",
                    "workDescription":"Achievements/Tasks :-"
                },
                {
                    "id":"workExperience2",
                    "workRoleName":"Mobile Application Developer",
                    "workCompanyName":"OnePercent",
                    "workDate":"09/2020 - 10/2020",
                    "workPlace":"(work from home) Bengaluru, india",
                    "workDescription":"Achievements/Tasks :-"
                }
            ],
            "Skills" : [
                {
                    "id":"skill0",
                    "skills":"Full Stack App Developer"
                },
                {
                    "id":"skill1",
                    "skills":"Problem solving"
                },
                {
                    "id":"skill2",
                    "skills":"Data structure"
                },
                {
                    "id":"skill3",
                    "skills":"Algorithm"
                },
                {
                    "id":"skill4",
                    "skills":"Excel"
                },
                {
                    "id":"skill5",
                    "skills":"Android development"
                },
                {
                    "id":"skill6",
                    "skills":"DBMS"
                },
                {
                    "id":"skill7",
                    "skills":"SQL"
                },
                {
                    "id":"skill8",
                    "skills":"OS"
                }
            ],
            "Personal Projects" : [
                {
                    "id":"personalProjects0",
                    "projectTitle":"Food For You - Online Food Ordering App (Available on play Store with 1000+ downloads)",
                    "projectAbout":"- Developed a ecommerce app backend using firebase with realtime Database, Firebase storage and authentication. XML and materialdesign for frontend."
                },
                {
                    "id":"personalProjects1",
                    "projectTitle":"App Block App",
                    "projectAbout":"- help users to increase their productive time that they waste in many unwanted distractive apps. By this app they can block unwanted apps up to 3 hours they can stop time whenever they want. It also has parental lock by that user not allow to uninstall this app if they want they can stop it."
                },
                {
                    "id":"personalProjects2",
                    "projectTitle":"Chatting App",
                    "projectAbout":"- it show users a photo of an actor then user option to select one and show result at the end."
                }
            ],
            "Languages" : [
                {
                    "id":"languages0",
                    "lang":"JAVA",
                    "langExperiance":"Full Professional Proficiency"
                },
                {
                    "id":"languages1",
                    "lang":"C",
                    "langExperiance":"Full Professional Proficiency"
                },
                {
                        "id":"languages2",
                        "lang":"C++",
                        "langExperiance":"Full Professional Proficiency"
                },
                {
                    "id":"languages3",
                    "lang":"XML",
                    "langExperiance":"Full Professional Proficiency"
                },
                {
                    "id":"languages4",
                    "lang":"Python",
                    "langExperiance":"Limited Working Proficiency"
                },
                {
                    "id":"languages5",
                    "lang":"Machine Learing",
                    "langExperiance":"Elementry Proficiency"
                }
            ]
        }
    }

    bindOnShowEducationSection(callback){
        this.onshowEducationSection=callback;
    }

    bindFreshSubmittedDiv(callback){
        this.onrefreshSubmittedDiv=callback;
    }

    commit(SELECTED_VALUE){
        
        if (SELECTED_VALUE){
        this.onrefreshSubmittedDiv(this.data,this.internalDivIds,SELECTED_VALUE);
        }else{
            this.onshowEducationSection(this.data,this.internalDivIds);
        }
    }


    submitData(SELECTED_VALUE,submittedValues){
        this.data[SELECTED_VALUE]=submittedValues;
        this.commit(SELECTED_VALUE);
    }

    deleteSelectedData(id,SELECTED_VALUE){

        const DivIds={
            "Name":"personalDetails",
            "Education":"education",
            "Work Experience":"workExperience",
            "Skills":"skills",
            "Personal Projects":"personalProjects",
            "Languages":"languages"
         }

        const tempData=this.data[SELECTED_VALUE];
        let newArray=[];

        let isHaveToChangeId=false;

        tempData.forEach(function(item,index){
            if(id===index.toString()){
                isHaveToChangeId=true;
            }else{
            if(isHaveToChangeId){
                tempData[index]["id"]=DivIds[SELECTED_VALUE] + (index-1).toString();
            }
            newArray.push(tempData[index]);
        }
        });

        this.data[SELECTED_VALUE]=newArray;
        this.commit(SELECTED_VALUE);
    }




}



class View{

    constructor(){

        // left part of resume
        this.inputFieldsContainer=document.getElementById("inputFields");
        this.dropDown=document.getElementById("selectId");
       

        this.submitButton=document.getElementById("submitButton");
        this.resetButton=document.getElementById("resetButton");
        this.cancelButton=document.getElementById("cancelButton");
        this.addButton=document.getElementById("addButton");

        this.submitButton.style.visibility="collapse";
        this.resetButton.style.visibility="collapse";
        this.addButton.style.visibility="collapse";

        this.cancelButton.style.visibility="collapse";
        this.cancelButton.addEventListener('click',this.cancelForm);


        // right part of resume
        this.nameContainer=document.getElementById("personalDetails");
        this.educationContainer=document.getElementById("education");
        this.workExperienceContainer=document.getElementById("workExperience");
        this.skillsContainer=document.getElementById("skills");
        this.personalProjectContainer=document.getElementById("personalProjects");
        this.laguagesContainer=document.getElementById("languages");
    }

    
      // Retrieve an element from the DOM
      getSelectedElementFormDiv(id,selector){

          const element=document.getElementById(id).querySelectorAll(selector);
          return element;
      }


      displayPersonalDetailsDiv(data,internalDivIds){

        while (this.nameContainer.children.length > 0) {
            this.nameContainer.removeChild(this.nameContainer.lastChild);
        }

        data["Name"].forEach((name,index)=>{

            const newNameDiv=document.createElement('div');
            newNameDiv.id="education" + index.toString();
            newNameDiv.className="divMargin";

            const nameText=document.createElement('h2');
            nameText.id="personName" + index.toString();
            nameText.className="nameColor";
            nameText.textContent=name["personName"];
            newNameDiv.appendChild(nameText);

            const about=document.createElement('p');
            about.id="personAbout" + index.toString();
            about.textContent=name["personAbout"];
            newNameDiv.appendChild(about);

            const description=document.createElement('p');
            description.id="PersonSubDescription" + index.toString();
            description.textContent=name["PersonSubDescription"];
            newNameDiv.appendChild(description);

            this.nameContainer.appendChild(newNameDiv);
        });
      }


      displayEducationDiv(data,internalDivIds){

        while (this.educationContainer.children.length > 1) {
            this.educationContainer.removeChild(this.educationContainer.lastChild);
        }

    data["Education"].forEach((education,index)=>{

        let newEducationDiv=document.createElement('div');
        newEducationDiv.id="education" + index.toString();
        newEducationDiv.className="divMargin";

        let educationDegree=document.createElement('h3');
        educationDegree.id=internalDivIds["Education"][0] + index.toString();
        educationDegree.textContent=education["educationDegree"];
        newEducationDiv.appendChild(educationDegree);

        let educationCollege=document.createElement('p');
        educationCollege.id=internalDivIds["Education"][1] + index.toString();
        educationCollege.textContent=education["educationCollege"];
        educationCollege.className="highSize";
        newEducationDiv.appendChild(educationCollege);

        let educationDate=document.createElement('p');
        educationDate.id=internalDivIds["Education"][2] + index.toString();
        educationDate.textContent=education["educationDate"];
        educationDate.className="smallSize";
        newEducationDiv.appendChild(educationDate);

        let educationBranch=document.createElement('p');
        educationBranch.id=internalDivIds["Education"][3] + index.toString();
        educationBranch.textContent=education["educationBranch"];
        educationBranch.className="mediumSize";
        newEducationDiv.appendChild(educationBranch);

        this.educationContainer.appendChild(newEducationDiv);

         });
      }


      displayworkExperienceDiv(data,internalDivIds){

        while (this.workExperienceContainer.children.length > 1) {
            this.workExperienceContainer.removeChild(this.workExperienceContainer.lastChild);
        }

        data["Work Experience"].forEach((workExp,index)=>{

        let newworkExperienceDiv=document.createElement('div');
        newworkExperienceDiv.id="workExperience" + index.toString();
        newworkExperienceDiv.className="divMargin";

        let workRoleName=document.createElement('h3');
        workRoleName.id=internalDivIds["Work Experience"][0] + index.toString();
        workRoleName.textContent=workExp["workRoleName"];
        newworkExperienceDiv.appendChild(workRoleName);

        let workCompanyName=document.createElement('p');
        workCompanyName.id=internalDivIds["Work Experience"][1] + index.toString();
        workCompanyName.textContent=workExp["workCompanyName"];
        workCompanyName.className="highSize";
        newworkExperienceDiv.appendChild(workCompanyName);

        let workDate=document.createElement('p');
        workDate.id=internalDivIds["Work Experience"][2] + index.toString();
        workDate.textContent=workExp["workDate"];
        workDate.className="smallSize";
        newworkExperienceDiv.appendChild(workDate);

        let workPlace=document.createElement('p');
        workPlace.id=internalDivIds["Work Experience"][3] + index.toString();
        workPlace.textContent=workExp["workPlace"];
        workPlace.className="workLocation";
        newworkExperienceDiv.appendChild(workPlace);

        let workDescription=document.createElement('p');
        workDescription.id=internalDivIds["Work Experience"][3] + index.toString();
        workDescription.textContent=workExp["workDescription"];
        workDescription.className="smallSize";
        newworkExperienceDiv.appendChild(workDescription);

        this.workExperienceContainer.appendChild(newworkExperienceDiv);
        });
      }


      displaySkillsDiv(data,internalDivIds){

        while (this.skillsContainer.children.length > 1) {
            this.skillsContainer.removeChild(this.skillsContainer.lastChild);
        }

        data["Skills"].forEach((skills,index)=>{

            const newSkillDiv=document.createElement('div');
            newSkillDiv.id="skills" + index.toString();
            newSkillDiv.className="skills";

            const skill=document.createElement('p');
            skill.id=internalDivIds["Skills"][1] + index.toString();
            skill.textContent=skills["skills"];
            newSkillDiv.appendChild(skill);

            this.skillsContainer.appendChild(newSkillDiv);

        });
      }


      displayPersonalProjectsDiv(data,internalDivIds){

        while (this.personalProjectContainer.children.length > 1) {
            this.personalProjectContainer.removeChild(this.personalProjectContainer.lastChild);
        }

        data["Personal Projects"].forEach((Projects,index)=>{

            let newProjectDiv=document.createElement('div');
            newProjectDiv.id="education" + index.toString();
            newProjectDiv.className="divMargin";
    
            let projectTitle=document.createElement('p');
            projectTitle.id=internalDivIds["Personal Projects"][0] + index.toString();
            projectTitle.textContent=Projects["projectTitle"];
            projectTitle.className="highSize";
            newProjectDiv.appendChild(projectTitle);
    
            let projectAbout=document.createElement('p');
            projectAbout.id=internalDivIds["Personal Projects"][1] + index.toString();
            projectAbout.textContent=Projects["projectAbout"];
            projectAbout.className="smallSize";
            newProjectDiv.appendChild(projectAbout);

            this.personalProjectContainer.appendChild(newProjectDiv);

        });
      }


      displayLanguagesDiv(data,internalDivIds){

        while (this.laguagesContainer.children.length > 1) {
            this.laguagesContainer.removeChild(this.laguagesContainer.lastChild);
        }

        data["Languages"].forEach((Projects,index)=>{

        let newLanguageDiv=document.createElement('div');
        newLanguageDiv.id="education" + index.toString();
        newLanguageDiv.className="divMargin";
    
            let lang=document.createElement('p');
            lang.id=internalDivIds["Languages"][0] + index.toString();
            lang.textContent=Projects["lang"];
            lang.className="langName";
            newLanguageDiv.appendChild(lang);
    
            let langExperiance=document.createElement('p');
            langExperiance.id=internalDivIds["Languages"][1] + index.toString();
            langExperiance.textContent=Projects["langExperiance"];
            langExperiance.className="langEx";
            newLanguageDiv.appendChild(langExperiance);

            this.laguagesContainer.appendChild(newLanguageDiv);

        });

      }


      displayInputFields(data,internalDivIds){

        let mainDiv=document.getElementById("inputFields");

        while (this.inputFieldsContainer.children.length > 0) {
            this.inputFieldsContainer.removeChild(this.inputFieldsContainer.lastChild);
        }

     const SELECTED_VALUE=this.dropDown.options[this.dropDown.selectedIndex].text;

     let outerDiv=document.createElement('div');
     outerDiv.id="outerMainDiv";

     if(SELECTED_VALUE!=="select option"){

    data[SELECTED_VALUE].forEach(function(item,ind){

        let subDiv=document.createElement('div');
                subDiv.id="inputFields" + ind.toString();
                subDiv.className="inputFieldDiv";

        internalDivIds[SELECTED_VALUE].forEach(function(SELECTED_VALUE_TEXT,index){

            if(index===0){

               let elem=document.createElement('h4');
               elem.appendChild(document.createTextNode('Title :'));
               subDiv.appendChild(elem);

               let elem1=document.createElement('input');
               elem1.id="titleInput" + ind.toString() + index.toString();
               elem1.className="inputField";
               elem1.value=item[SELECTED_VALUE_TEXT];
               subDiv.appendChild(elem1);
            }else{

                let elem2=document.createElement('h6');
                elem2.appendChild(document.createTextNode("Sub-description" + index.toString()));
                subDiv.appendChild(elem2);

               let elem3=document.createElement('input');
               elem3.id="titleInput" + ind.toString() + index.toString();
               elem3.className="inputField";
               elem3.value=item[SELECTED_VALUE_TEXT];
               subDiv.appendChild(elem3);
            }
        });

        if(SELECTED_VALUE!=="Name"){
      let elem4=document.createElement('input');
      elem4.type="submit";
      elem4.value="Delete";
      elem4.id=ind.toString();
      elem4.className="buttonDelete";
      subDiv.appendChild(elem4);
        }

      outerDiv.appendChild(subDiv);

    });

    this.inputFieldsContainer.appendChild(outerDiv);
    submitButton.style.visibility="visible";
      resetButton.style.visibility="visible";
      cancelButton.style.visibility="visible";
      addButton.style.visibility="visible";

      if(SELECTED_VALUE=="Name"){
        addButton.style.visibility="collapse";
      }
      
    }else{
      submitButton.style.visibility="collapse";
      resetButton.style.visibility="collapse";
      cancelButton.style.visibility="collapse";
      addButton.style.visibility="collapse";
    }
  }

// <======  UNABLE TO SET DROPDOWN SELECTED INDEX =====>
  // cancelling the selected filled
   cancelForm(){
    //this.dropDown.selectedIndex=0;
    let m=document.getElementById("inputFields");
    m.innerHTML="";

    submitButton.style.visibility="collapse";
    resetButton.style.visibility="collapse";
    cancelButton.style.visibility="collapse";
    addButton.style.visibility="collapse";
  }



  bindDropdown(handler){
      this.dropDown.addEventListener('change',event=>{
          const id=event.target.id;
          handler(id);
      })
  }

  bindSubmitButton(handler){
      this.submitButton.addEventListener("click",event=>{
          const submittedValues=this.getAllTheInputFieldsData();
          const SELECTED_VALUE=this.dropDown.options[this.dropDown.selectedIndex].text;
          handler(SELECTED_VALUE,submittedValues);
      });
  }


  bindAddButton(handler){
      this.addButton.addEventListener('click',even=>{
        this.generateNewField();
      });
  }


  bindResetButton(handler){
      this.resetButton.addEventListener('click',event=>{
          handler(event.target.id);
      });
  }

  bindDeleteButton(handler){
      this.inputFieldsContainer.addEventListener('click',event=>{
        const SELECTED_VALUE=this.dropDown.options[this.dropDown.selectedIndex].text;
        handler(event.target.id,SELECTED_VALUE);
      });
  }


  refreshSubmittedDiv(data,internalDivIds){

    const SELECTED_VALUE=this.dropDown.options[this.dropDown.selectedIndex].text;
    if(SELECTED_VALUE==="Name"){
        this.displayPersonalDetailsDiv(data,internalDivIds);
    }else if(SELECTED_VALUE==="Education"){
        this.displayEducationDiv(data,internalDivIds);
    }else if(SELECTED_VALUE==="Work Experience"){
        this.displayworkExperienceDiv(data,internalDivIds);
    }else if(SELECTED_VALUE==="Skills"){
        this.displaySkillsDiv(data,internalDivIds);
    }else if(SELECTED_VALUE==="Personal Projects"){
        this.displayPersonalProjectsDiv(data,internalDivIds);
    }else if(SELECTED_VALUE==="Languages"){
        this.displayLanguagesDiv(data,internalDivIds);
    }
    this.cancelForm();
  }

  getAllTheInputFieldsData(){

    const internalDivIds={
        "Name":["personName","personAbout","PersonSubDescription"],
        "Education":["educationDegree","educationCollege","educationDate","educationBranch"],
        "Work Experience":["workRoleName","workCompanyName","workDate","workPlace","workDescription"],
        "Skills":["skills"],
        "Personal Projects":["projectTitle","projectAbout"],
        "Languages":["lang","langExperiance"]
      };

    const SELECTED_VALUE=this.dropDown.options[this.dropDown.selectedIndex].text;

    //const inputFieldsMainDiv=document.getElementById("inputFields").querySelectorAll('div');
    const inputFieldsMainDiv=document.getElementById("outerMainDiv").querySelectorAll('div');

    const data=[];

    inputFieldsMainDiv.forEach(function(item,index){

        const subFieldsOfMainDiv=document.getElementById(inputFieldsMainDiv[index].id).querySelectorAll("input");

        

        if(SELECTED_VALUE==="Name"){
            const filledData={
                personName:subFieldsOfMainDiv[0].value,
                personAbout:subFieldsOfMainDiv[1].value,
                PersonSubDescription:subFieldsOfMainDiv[2].value
            }
            data.push(filledData);
        }else if(SELECTED_VALUE==="Education"){
        const filledData={
            id:"education" + index.toString(),
            educationDegree:subFieldsOfMainDiv[0].value,
            educationCollege:subFieldsOfMainDiv[1].value,
            educationDate:subFieldsOfMainDiv[2].value,
            educationBranch:subFieldsOfMainDiv[3].value
            }
        data.push(filledData);
        }else if(SELECTED_VALUE==="Work Experience"){
            const filledData={
                id:"workExperience" + index.toString(),
                workRoleName:subFieldsOfMainDiv[0].value,
                workCompanyName:subFieldsOfMainDiv[1].value,
                workDate:subFieldsOfMainDiv[2].value,
                workPlace:subFieldsOfMainDiv[3].value,
                workDescription:subFieldsOfMainDiv[4].value
                }
            data.push(filledData);
            }else if(SELECTED_VALUE==="Skills"){
                const filledData={
                    id:"skills" + index.toString(),
                    skill:subFieldsOfMainDiv[0].value,
                    }
                data.push(filledData);
                }else if(SELECTED_VALUE==="Personal Projects"){
                    const filledData={
                        id:"personalProjects" + index.toString(),
                        projectTitle:subFieldsOfMainDiv[0].value,
                        projectAbout:subFieldsOfMainDiv[1].value,
                        }
                    data.push(filledData);
                    }else if(SELECTED_VALUE==="Languages"){
                        const filledData={
                            id:"languages" + index.toString(),
                            lang:subFieldsOfMainDiv[0].value,
                            langExperiance:subFieldsOfMainDiv[1].value,
                            }
                        data.push(filledData);
                        }
    });
    return data;
  }

  generateNewField(){

    const internalDivIds={
        "Name":["personName","personAbout","PersonSubDescription"],
        "Education":["educationDegree","educationCollege","educationDate","educationBranch"],
        "Work Experience":["workRoleName","workCompanyName","workDate","workPlace","workDescription"],
        "Skills":["skills"],
        "Personal Projects":["projectTitle","projectAbout"],
        "Languages":["lang","langExperiance"]
      };

    const mainDiv=document.getElementById("outerMainDiv");
    const mainDivSubDivs=document.getElementById("outerMainDiv").querySelectorAll('div');

    const SELECTED_VALUE=this.dropDown.options[this.dropDown.selectedIndex].text;

    if(SELECTED_VALUE!=="select option"){

        let subDiv=document.createElement('div');
        subDiv.id="inputFields" + mainDivSubDivs.length.toString();
        subDiv.className="inputFieldDiv";

        internalDivIds[SELECTED_VALUE].forEach(function(item,index){

            if(index===0){

               let elem=document.createElement('h4');
               elem.appendChild(document.createTextNode('Title :'));
               subDiv.appendChild(elem);

               let elem1=document.createElement('input');
               elem1.id="titleInput" + mainDivSubDivs.length.toString() + index.toString();
               elem1.className="inputField";
               subDiv.appendChild(elem1);
            }else{

                let elem2=document.createElement('h6');
                elem2.appendChild(document.createTextNode("Sub-description" + index.toString()));
                subDiv.appendChild(elem2);

               let elem3=document.createElement('input');
               elem3.id="titleInput" + mainDivSubDivs.length.toString() + index.toString();
               elem3.className="inputField";
               subDiv.appendChild(elem3);
            }
        });

        let elem4=document.createElement('input');
      elem4.type="submit";
      elem4.value="Delete";
      elem4.id=mainDivSubDivs.length.toString();
      elem4.className="buttonDelete";
      subDiv.appendChild(elem4);

      mainDiv.appendChild(subDiv);

     }
   }

}


class Controller{
    constructor(model,view){
        this.model=model;
        this.view=view;

        // Explicit this binding
        this.model.bindOnShowEducationSection(this.onshowEducationSection);
        this.model.bindFreshSubmittedDiv(this.onrefreshSubmittedDiv);
        
        this.view.bindDropdown(this.handleDropdown);
        this.view.bindSubmitButton(this.submitData);
        this.view.bindAddButton(this.handelAddButton);
        this.view.bindResetButton(this.handelResetButton);
        this.view.bindDeleteButton(this.handelDeleteButton);

        // calling first time for checking
        this.onshowNameSection(this.model.data,this.model.internalDivIds);
        this.onshowEducationSection(this.model.data,this.model.internalDivIds);
        this.onShowWorkExperience(this.model.data,this.model.internalDivIds);
        this.onShowSkillsDiv(this.model.data,this.model.internalDivIds);
        this.onrefreshSubmittedDiv(this.model.data,this.model.internalDivIds);
        this.onPersonalProjectsDiv(this.model.data,this.model.internalDivIds);
        this.onLaguagesDiv(this.model.data,this.model.internalDivIds);
        
    }

    onshowNameSection = (data,internalDivIds)=>{
        this.view.displayPersonalDetailsDiv(data,internalDivIds);
    }

    onshowEducationSection = (data,internalDivIds) => {
        this.view.displayEducationDiv(data,internalDivIds);
    }

    onShowWorkExperience = (data,internalDivIds)=>{
        this.view.displayworkExperienceDiv(data,internalDivIds);
    }

    onShowSkillsDiv = (data,internalDivIds)=>{
        this.view.displaySkillsDiv(data,internalDivIds);
    }

    onPersonalProjectsDiv = (data,internalDivIds)=>{
        this.view.displayPersonalProjectsDiv(data,internalDivIds);
    }

    onLaguagesDiv = (data,internalDivIds)=>{
        this.view.displayLanguagesDiv(data,internalDivIds);
    }

    onrefreshSubmittedDiv = (data,internalDivIds)=>{
        this.view.refreshSubmittedDiv(data,internalDivIds);
    }

    // onshowForm=(data,labelNumberOfItems) =>{
    //     this.view.displayInputFields(data,labelNumberOfItems);
    // }

    handleDropdown = (id) =>{
        this.view.displayInputFields(this.model.data,this.model.internalDivIds);
    }

    submitData = (SELECTED_VALUE,submittedValues) =>{
        this.model.submitData(SELECTED_VALUE,submittedValues);
    }

    handelAddButton = () =>{
        this.view.generateNewField();
    }

    handelResetButton=(id)=>{
        this.view.displayInputFields(this.model.data,this.model.internalDivIds);
    }

    handelDeleteButton = (id,SELECTED_VALUE) =>{
        this.model.deleteSelectedData(id,SELECTED_VALUE);
    }
}

const app=new Controller(new Model(),new View());