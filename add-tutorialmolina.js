import React, {component} from "react";

export default class addtutorial extends components{
    constructor (props){
        super(props)
        this.onchange = this.onchange.bind(this);
        this.ontitle = this.ontitle.bind(this);
        this.savetutorial = this.savetutorial.bind(this);
        this.newtutorial = this.newtutorial.bind(this);
        
        this.state = {
            title: "",
            descripcion: "",
            published:false,
            submitted:false,
        };
    }

    onchangeTitle(e){
        this.setState({
            title:e.target.value,
        })
    }

    onchangedescripcion(e){
        this.descripcion({
            descripcion:e.target.value,
        })
    }

    savetutorial(e){
        let data =({
            title:this.State.value,
            descripcion:this.State.value,
            published: false
        })
    }
    TutorialDataService.create(data).then(() => {
        console.log("created new item successly");
        this.setState({
            submitted:true,
        })
    })
    .catch((e) => {
        console.log(e);
    )};

    newtutorial(){
        this.setState({
            title:"",
            descripcion:"",
            published:false,
            submitted: false,
        });
    }
}

render(){
    return (
        <div className="submit-form">
        {this.state.submitted ? (
            <div>
            <h3>you submitedd successly</h3>
            <button onClick={this.newtutorial}>
            add
            </button>
            </div>
        ): (
            <div>
            <div>
            <label thmlFor="title" >title </label>
            <input 
            type="text"
            id="title"
            required
            value.{this.state.title}
            onchange={this.onchangeTitle}
            name="title"
            />
            </div>
            </div>
        )}
        </div>
    )
}